import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Arrow = (props) => {
  if (props.direction === "right") {
    return (
      <h1 onClick={ props.clickFunction }>
        <FaArrowAltCircleRight />
      </h1>
    )
  } else {
    return (
      <h1 onClick={ props.clickFunction }>
        <FaArrowAltCircleLeft />
      </h1>
    )
  }
};

export default Arrow;