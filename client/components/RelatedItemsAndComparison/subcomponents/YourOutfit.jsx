import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Arrow from './Arrow.jsx';
import YOCard from './YOCard.jsx';
import { IoIosAddCircleOutline } from 'react-icons/io';

const YourOutfit = (props) => {

  const localData = [];
  for (var key in localStorage) {
    if (key !== 'length' && localStorage[key].constructor !== Function) {
      localData.push(localStorage[key]);
    }
  }
  const [state, setState] = useState({
    allData: localData,
    firstCard: 0,
    lastCard: 3,
    lastIndex: 0,
    visibleData: localData.slice(0, 3)
  });

  const updateState = () => {
    const localData = [];
    for (var key in localStorage) {
      if (key !== 'length' && localStorage[key].constructor !== Function) {
        localData.push(localStorage[key]);
      }
    }
    setState({
      allData: localData,
      firstCard: state.firstCard,
      lastCard: state.lastCard,
      lastIndex: localData.length,
      visibleData: localData.slice(state.firstCard, state.lastCard)
    });
  }

  useEffect(() => {
    updateState();
  }, [/*console.log('state after useEffect: ', state)*/])

  // clickfunction addItem
  const addItem = (data) => {
    // adds item to the localStorage by id
    localStorage.setItem(data.id, JSON.stringify(data));
    // loop through localStorage and refresh state
    const localData = [];
    const prevLength = state.allData.length;
    var newLastIndex = state.lastIndex;
    for (var key in localStorage) {
      if (key !== 'length' && localStorage[key].constructor !== Function) {
        localData.push(localStorage[key]);
      }
    }
    // increment lastIndex ONLY IF new length is different
    if (localData.length !== prevLength) {
      newLastIndex ++;
    }
    setState({
      allData: localData,
      firstCard: state.firstCard,
      lastCard: state.lastCard,
      lastIndex: newLastIndex,
      visibleData: localData.slice(state.firstCard, state.lastCard)
    });
  };

  // Arrow Functionality
  const previousSlide = () => {
    // console.log('clicked previous slide');
    const lastIndex = state.allData.length > 0 ? state.allData.length - 1 : 0;
    if (state.firstCard > 0) {
      setState({
        allData: state.allData,
        firstCard: state.firstCard -1,
        lastCard: state.lastCard -1,
        lastIndex: state.lastIndex,
        visibleData: state.allData.slice(state.firstCard, state.lastCard)
      });
    }
  }
  // Arrow Functionality
  const nextSlide = () => {
    // console.log('clicked next slide');
    const lastIndex = state.allData.length > 0 ? state.allData.length - 1 : 0;
    if (state.lastCard <= lastIndex) {
      setState({
        allData: state.allData,
        firstCard: state.firstCard +1,
        lastCard: state.lastCard +1,
        lastIndex: state.lastIndex,
        visibleData: state.allData.slice(state.firstCard, state.lastCard)
      });
    }
  }

  const renderList = () => {
    return (
      state.visibleData.map((product, index) => {
        return <YOCard key={index} item={JSON.parse(product)} click={props.click} remove={ (e) => {return removeFromOutfit(e)}}/>
      })
    )
  }

  const renderAddButton = () => {
    return (
      <div
        className='add-button-container rr-column-container'
        onClick={ () => {
        return addItem(props.currentItem) }}>
          <div className='rr-add-button' >
            < IoIosAddCircleOutline size={40}/>
            <div>
              Add to Outfit
            </div>
          </div>
      </div>
    )
  }
  const removeFromOutfit = (id) => {
    console.log(id ,' was clicked!!');
    console.log('localStorage before delete: ', localStorage);
    localStorage.removeItem(id);
    updateState();
  }
  // conditional rendering
  if (state.firstCard === 0 && state.lastIndex <= 3) {
    return (
      <div>
        <h2>Your Outfit: </h2>

        <div className='rr-row-container' >

          { renderAddButton() }
          { renderList() }

        </div>
      </div>
    );
  } else if (state.firstCard === 0) {
    return (
      <div>
        <h2>Your Outfit: </h2>
        <div className='rr-row-container' >

          { renderAddButton() }
          { renderList() }

          <div className="rr-carousel-arrow">
            <Arrow
              direction="right"
              clickFunction={ () => { nextSlide() } }
            />
          </div>

        </div>
      </div>
    );
  } else if (state.lastCard === state.lastIndex) {
    return (
      <div>
        <h2>Your Outfit: </h2>
        <div className='rr-row-container' >

          <div className="rr-carousel-arrow">
            <Arrow
              direction="left"
              clickFunction={ () => { previousSlide() } }
            />
          </div>

          { renderAddButton() }
          { renderList() }

        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Your Outfit: </h2>
        <div className='rr-row-container' >

          <div className="rr-carousel-arrow">
            <Arrow
              direction="left"
              clickFunction={ () => { previousSlide() } }
            />
          </div>

          { renderAddButton() }
          { renderList() }

          <div className="rr-carousel-arrow">
            <Arrow
              direction="right"
              clickFunction={ () => { nextSlide() } }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default YourOutfit;