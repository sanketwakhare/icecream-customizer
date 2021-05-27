import React from "react";
import ConeWafer from "./ConeWafer";
import Flavour from "./Flavour";
import Toppings from "./Toppings";

class IceCream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedConeWafer: "",
      selectedFlavour: "",
      selectedToppings: [],
    };
  }

  onConeWaferChange = (event) => {
    this.setState({ selectedConeWafer: event.currentTarget.value });
  };

  onFlavourChange = (event) => {
    this.setState({ selectedFlavour: event.currentTarget.value });
  };

  onToppingsChange = (event) => {
    let { currentTarget } = event;
    let toppings = this.state.selectedToppings;
    if (currentTarget.checked) {
      if (toppings.length < 2) {
        toppings.push(event.currentTarget.value);
      } else if (toppings.length >= 2) {
        currentTarget.checked = false;
        return;
      }
    } else if (
      !currentTarget.checked &&
      toppings.includes(currentTarget.value)
    ) {
      toppings = toppings.filter((topping) => {
        return topping !== currentTarget.value;
      });
    }
    this.setState({
      selectedToppings: toppings,
    });
  };

  onAddToCart = (event) => {
    const { selectedConeWafer, selectedFlavour, selectedToppings } = this.state;

    console.log(selectedConeWafer, selectedFlavour, selectedToppings);
  };

  render() {
    const { coneWafer, flavour, toppings } = this.props;
    return (
      <main className="block col-2">
        <form>
          <ConeWafer
            coneWafer={coneWafer}
            onConeWaferChange={this.onConeWaferChange}
            className="row"
          />
          <Flavour
            flavour={flavour}
            onFlavourChange={this.onFlavourChange}
            className="row"
          />
          <Toppings
            toppings={toppings}
            onToppingsChange={this.onToppingsChange}
            className="row"
          />
          <button onClick={this.onAddToCart} className="btn btn-primary">
            Add Ice Cream to Cart
          </button>
        </form>
      </main>
    );
  }
}

export default IceCream;
