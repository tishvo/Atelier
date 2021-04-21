import React, { useState } from 'react';
import axios from 'axios';
import Arrow from './Arrow.jsx';
import YOCard from './YOCard.jsx';

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

  React.useEffect(() => {
    updateState();
  }, [console.log('state after useEffect: ', state)])

  // clickfunction
  const addItem = (data) => {
    // adds item to the localStorage by id
    localStorage.setItem(data.id, JSON.stringify(data));
    console.log('added to localStorage: ', localStorage);
    // loop through localStorage and refresh state
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
      lastIndex: state.lastIndex + 1,
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
    console.log('this is lastIndex: ', lastIndex);
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
      state.visibleData.map((product) => {
        return <YOCard item={JSON.parse(product)} click={props.click} remove={ (e) => {return removeFromOutfit(e)}}/>
      })
    )
  }

  const renderAddButton = () => {
    return (
      <button styles={'margins:center borderStyle:solid width:30%'} onClick={ () => {
        return addItem(props.currentItem)} }> &#xFF0B; Add to Outfit </button>
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

          <Arrow
            direction="right"
            clickFunction={ () => { nextSlide() } }
            glyph="&#9654;"
          />
        </div>
      </div>
    );
  } else if (state.lastCard === state.lastIndex) {
    return (
      <div>
        <h2>Your Outfit: </h2>
        <div className='rr-row-container' >

          <Arrow
            direction="left"
            clickFunction={ () => { previousSlide() } }
            glyph="&#9664;"
          />
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

          <Arrow
            direction="left"
            clickFunction={ () => { previousSlide() } }
            glyph="&#9664;"
          />
          { renderAddButton() }
          { renderList() }

          <Arrow
            direction="right"
            clickFunction={ () => { nextSlide() } }
            glyph="&#9654;"
          />
        </div>
      </div>
    );
  }
}

export default YourOutfit;