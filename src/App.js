import React from "react";
import Header from "./components/Header";
import IceCream from "./components/IceCream";
import Cart from "./components/Cart";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  render() {
    const { coneWafer, flavour, toppings } = data;
    return (
      <div>
        <Header />
        <div className="row">
          <IceCream
            coneWafer={coneWafer}
            flavour={flavour}
            toppings={toppings}
          />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
