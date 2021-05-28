import React from "react";

class Toppings extends React.Component {
  render() {
    const { toppings, onToppingsChange } = this.props;
    return (
      <div className="row">
        <h1>Choose any 2 Toppings</h1>
        {toppings.map((toppingItem) => (
          <div key={toppingItem.toppingName} className="col-1">
            <input
              type="checkbox"
              name="toppings"
              value={toppingItem.toppingName}
              onChange={onToppingsChange}
            />
            <label>{toppingItem.toppingName}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Toppings;
