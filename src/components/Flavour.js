import React from "react";

class Flavour extends React.Component {
  render() {
    const { flavour, onFlavourChange } = this.props;
    return (
      <div>
        <h1>Choose any one Flavour</h1>
        {flavour.map((flavourItem) => (
          <div key={flavourItem.flavourName}>
            <input
              type="radio"
              name="flavour"
              value={flavourItem.flavourName}
              onChange={onFlavourChange}
            />
            <label>{flavourItem.flavourName}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default Flavour;
