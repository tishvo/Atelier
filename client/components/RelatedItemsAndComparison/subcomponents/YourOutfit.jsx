import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Arrow from './Arrow.jsx';
import YOCard from './YOCard.jsx';
import { IoIosAddCircleOutline } from 'react-icons/io';

const YourOutfit = (props) => {

  // create ref for scrolling
  const componentRef = React.createRef();



  const localData = [];
  for (var key in localStorage) {
    if (key !== 'length' && key !== 'cart' && localStorage[key].constructor !== Function) {
      localData.push(localStorage[key]);
    }
  }

  const [state, setState] = useState({
    allData: localData,
  });



  const updateState = () => {
    const localData = [];
    for (var key in localStorage) {
      if (key !== 'length' && key !== 'cart' && localStorage[key].constructor !== Function) {
        localData.push(localStorage[key]);
      }
    }
    setState({
      allData: localData,
    });
  }

  useEffect(() => {
    console.log('props in YourOutfit: ', props)
    updateState();
  }, [])

  // clickfunction addItem
  const addItem = (data) => {
    // adds item to the localStorage by id
    localStorage.setItem(data.id, JSON.stringify(data));
    // loop through localStorage and refresh state
    const localData = [];
    const prevLength = state.allData.length;
    var newLastIndex = state.lastIndex;
    for (var key in localStorage) {
      if (key !== 'length' && key !== 'cart' && localStorage[key].constructor !== Function) {
        localData.push(localStorage[key]);
      }
    }
    // increment lastIndex ONLY IF new length is different
    if (localData.length !== prevLength) {
      newLastIndex ++;
    }
    setState({
      allData: localData,
    });
  };

  // Arrow Functionality
  const previousSlide = () => {
    if (componentRef.current) {
      // console.log('clicked previous slide');
      componentRef.current.scrollBy({
        left: -260,
        behavior: 'smooth'
      })
    }
  }
  // Arrow Functionality
  const nextSlide = () => {
    if (componentRef.current) {
      // console.log('clicked next slide');
      componentRef.current.scrollBy({
        left: 260,
        behavior: 'smooth'
      })
    }
  }


  const renderList = () => {
    // localStorage.clear();
    // console.log(state.allData, localStorage);
    return (
      <div className='slide-container'>

        <div className="rr-carousel-arrow">
          <Arrow
            direction="left"
            clickFunction={ () => { previousSlide() } }
          />
        </div>

        { <div className='items-container' id='componentRef' ref={componentRef}>
            {renderAddButton()}
            {state.allData.map((product, index) => {
              return (
                <div key={index} className='single-item-container'>
                  <YOCard item={JSON.parse(product)} click={props.click} remove={ (e) => {return removeFromOutfit(e)}}/>
                </div>
              )
            })}
          </div>
        }

        <div className="rr-carousel-arrow">
          <Arrow
            direction="right"
            clickFunction={ () => { nextSlide() } }
          />
        </div>

      </div>
    )
  }

  const renderAddButton = () => {
    return (
        <div
          className='single-item-container'
          style={{'cursor': 'pointer'}}
          onClick={ () => { return addItem(props.currentItem) }}>
            <div className='rr-card-styles'>
              < IoIosAddCircleOutline size={40} />
              <div >
                Add to Outfit
              </div>
            </div>
        </div>
    )
  }

  const removeFromOutfit = (id) => {
    localStorage.removeItem(id);
    updateState();
  }

  return (
    <div>
      <h2>Your Outfit</h2>

      <div className='rr-row-container' >

        { renderList() }

      </div>
    </div>
  );
}

export default YourOutfit;