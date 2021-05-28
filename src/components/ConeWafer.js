import React from "react";

class ConeWafer extends React.Component {
  render() {
    const { coneWafer, onConeWaferChange } = this.props;
    return (
      <div className="row center">
        <h1>Choose any one Cone Wafer</h1>
        {coneWafer.map((coneItem) => (
          <div key={coneItem.coneName} className="col-1">
            <input
              type="radio"
              name="coneWafer"
              value={coneItem.coneName}
              onChange={onConeWaferChange}
            />
            <label>{coneItem.coneName}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default ConeWafer;
