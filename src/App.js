import React from "react";
import Header from "./components/Header";
import IceCream from "./components/IceCream";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import data from "./data";
const _ = require("lodash");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      showCheckoutForm: false,
    };
  }

  /**
   * Add Product to Cart
   */
  onAddToCart = (product) => {
    const { selectedConeWafer, selectedFlavour, selectedToppings } = product;
    let cart = this.state.cartItems;

    // check if product already exist
    const exist = cart.find((x) => {
      return (
        _.isEqual(x.selectedConeWafer, selectedConeWafer) &&
        _.isEqual(x.selectedFlavour, selectedFlavour) &&
        this.arraysMatch(x.selectedToppings, selectedToppings)
      );
    });

    if (exist) {
      // update the produce qualtity if exist
      const updatedCart = cart.map((x) =>
        _.isEqual(exist, x) ? { ...exist, qty: exist.qty + 1 } : x
      );
      this.setState({
        cartItems: updatedCart,
      });
    } else {
      // create new product
      product.id = cart.length + 1000;
      product.name = product.selectedFlavour + "_" + product.id;
      product.qty = 1;
      product.price = this.getRandomArbitrary(150, 200);
      cart.push(product);
      this.setState({ cartItems: cart });
    }
    this.setState({ showCheckoutForm: false });
  };

  /**
   *  Remove product from Cart
   * */
  onRemoveFromCart = (product) => {
    let cart = this.state.cartItems;
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const updatedCart = cart.filter((x) => x.id !== product.id);
      this.setState({
        cartItems: updatedCart,
      });
    } else {
      const updatedCart = cart.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      this.setState({
        cartItems: updatedCart,
      });
    }
    this.setState({ showCheckoutForm: false });
  };

  // Show checkout form
  showCheckoutForm = () => {
    this.setState({ showCheckoutForm: true });
  };

  // generate random price of product. this is just for this example
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // compare array elements
  arraysMatch = function (arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;
    // Check if all items exist and are in the same order

    for (let i = 0; i < arr1.length; i++) {
      // if (!arr2.find(arr1[i]) || !arr1.find(arr2[i])) {
      //   return false;
      // }
      let found1 = arr1.some((x) => x === arr2[i]);
      let found2 = arr2.some((x) => x === arr1[i]);
      if (!found1 || !found2) {
        return false;
      }
    }
    // Otherwise, return true
    return true;
  };

  render() {
    const { coneWafer, flavour, toppings } = data;
    return (
      <div className="center">
        <Header countCartItems={this.state.cartItems.length} />
        <div className="row">
          <IceCream
            coneWafer={coneWafer}
            flavour={flavour}
            toppings={toppings}
            onAddToCart={this.onAddToCart}
          />
          <Cart
            cartItems={this.state.cartItems}
            onAddToCart={this.onAddToCart}
            onRemoveFromCart={this.onRemoveFromCart}
            showCheckoutForm={this.showCheckoutForm}
          />
        </div>
        {/* Checkout form */}
        {this.state.showCheckoutForm && (
          <div className="row">
            <div className="col-1">
              <Checkout />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
