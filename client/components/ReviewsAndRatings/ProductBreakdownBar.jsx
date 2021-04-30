import React from 'react';
import { ImRadioChecked2 } from "react-icons/im";

const ProductBreakdownBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 10,

    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#e0e0de',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div style={{width: "210px"}}>
      <div style={containerStyles}>
        <div style={fillerStyles}> <ImRadioChecked2 />

          <span style={labelStyles}></span>
        </div>
      </div>
      <div className="mm-chardesc-container">{props.desc[props.char]}</div>
    </div>
  );
}

export default ProductBreakdownBar;