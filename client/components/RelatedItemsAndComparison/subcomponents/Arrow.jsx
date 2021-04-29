import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Arrow = (props) => {

  if (props.direction === "right") {
    return (
      <h1 onClick={ props.clickFunction }>
        <FaArrowAltCircleRight style={{'cursor': 'pointer'}} />
      </h1>
    )
  } else {
    return (
      <h1 onClick={ props.clickFunction }>
        <FaArrowAltCircleLeft style={{'cursor': 'pointer'}} />
      </h1>
    )
  }
};

export default Arrow;