import React from "react";

class Flavour extends React.Component {
  render() {
    const { flavour, onFlavourChange } = this.props;
    return (
      <div className="row">
        <h1>Choose any one Flavour</h1>
        {flavour.map((flavourItem) => (
          <div key={flavourItem.flavourName} className="col-1">
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
