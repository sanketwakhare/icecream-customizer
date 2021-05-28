import React from "react";
/**
 * Cart
 * */
class Cart extends React.Component {
  render() {
    const { cartItems, onAddToCart, onRemoveFromCart, showCheckoutForm } =
      this.props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

    return (
      <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button
                  onClick={() => onRemoveFromCart(item)}
                  className="btn btn-danger btn-xs"
                >
                  -
                </button>{" "}
                <button
                  onClick={() => onAddToCart(item)}
                  className="btn btn-success btn-xs"
                >
                  +
                </button>
              </div>

              <div className="col-2 text-right">
                {item.qty} x <span>&#8377;</span>
                {item.price.toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>
                    <span>&#8377;</span>
                    {itemsPrice.toFixed(2)}
                  </strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <button
                  onClick={() => showCheckoutForm()}
                  className="btn btn-primary"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  }
}

export default Cart;
