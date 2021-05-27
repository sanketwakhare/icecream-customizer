import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <aside className="block col-1">
        <h1>Cart</h1>
        <button className="btn btn-primary">Checkout</button>
      </aside>
    );
  }
}

export default Cart;
