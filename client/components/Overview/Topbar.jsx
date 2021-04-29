import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { TiShoppingCart } from 'react-icons/ti';

class Topbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div id="af-topbar">

        <div id="af-topbar-title">
          <span>View Cart <TiShoppingCart/></span>
        </div>

        <div id="af-topbar-search">
          <input id="af-topbar-search-box" type="text"></input><HiOutlineSearch />
        </div>

      </div>
    )
  }
}

export default Topbar;