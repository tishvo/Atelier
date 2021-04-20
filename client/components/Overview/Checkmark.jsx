import React from 'react';
import logo from './pink-checkmark.png'; // Tell webpack this JS file uses this image

console.log(logo); //

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;