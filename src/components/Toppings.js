import React from "react";

class Toppings extends React.Component {
  handleOnChange(event) {
    // let val = event.checked;
    var filteredArray = this.checks.filter((obj) => {
      return obj.checked === true;
    });
    if (filteredArray.length >= 2) {
      this.checks.forEach((obj) => {
        if (obj.checked === false) obj.disabled = true;
      });
    } else {
      this.checks.forEach((obj) => {
        if (obj.checked === false) obj.disabled = false;
      });
    }
  }

  render() {
    const { toppings, onToppingsChange } = this.props;
    return (
      <div>
        <h1>Choose any 2 Toppings</h1>
        {toppings.map((toppingItem) => (
          <div key={toppingItem.toppingName}>
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
