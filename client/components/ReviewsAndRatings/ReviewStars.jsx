import React from 'react';

const ReviewStars = (props) => {

  const chosenFont  = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return(
    <div id={props.number}>
      {props.stars[props.number]}
    </div>
  )
}

export default ReviewStars;