import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const StarRating = (props) => {
  //console.log('StarRating rating props: ', props.stars);
  var strStars = '' + props.stars;
  //console.log('string stars: ', strStars);
  var starObj = {
    '1': <div><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>,
    '2': <div><FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></div>,
    '3': <div><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></div>,
    '4': <div><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>,
    '5': <div><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
  };
  return (
    starObj[strStars]
  )
}

export default StarRating;