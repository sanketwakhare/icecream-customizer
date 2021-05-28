import React from "react";

class Checkout extends React.Component {
  render() {
    return (
      <div className="block center row">
        <form className="row">
          <div className="col-1">
            Enter Email Address:
            <input type="text" name="email" />
          </div>
          <div className="col-1">
            Enter Phone Number:
            <input type="text" name="phone" />
          </div>
          <hr></hr>
          <div className="col-2 center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => alert("Order Completed!")}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
