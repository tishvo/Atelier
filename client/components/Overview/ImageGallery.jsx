import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx'
import ThumbnailCarousel from './ThumbnailCarousel.jsx'
import ThumbnailCarouselMini from './ThumbnailCarouselMini.jsx'

const ImageGallery = (props) => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null
  })

  const [state, setState] = useState({
    currentImage: props.currentImage,
    currentIndex: props.currentIndex,
    currentSelected: props.currentSelected,
    imgId: props.imgId,
    images: props.images
  })

  const handleMouseMove = (e) => {
    // if (props.imgId === "af-main-image-xl") {
    setMousePosition({
      x: e.pageX,
      y: e.pageY
    })
  // }
  }

  // const [state, setState] = useState({

  // })

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      handleMouseMove(event)

     return function cleanup() {window.removeEventListener('mousemove', handleMouseMove)}

    });
  }, []);

  const updateState = () => {

    setState({
      currentImage: props.currentImage,
      currentIndex: props.currentIndex,
      currentSelected: props.currentSelected,
      imgId: props.imgId,
      images: props.images

    })
  }

  // if (props.hasNothing) {
  //   console.log('nothing!')
  //   return null;
  // }

  // console.log('something!')
  if (props.imgId === "af-main-image-xl") {


    if (state.currentIndex === 0) {
      return (
        <div id="af-click-to-check">

          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <img
              style={{ marginLeft: (-mousePosition.x) / 2, marginTop: (-mousePosition.y) / 2 }}
              id={props.imgId}
              onClick={props.click}
              src={state.images[state.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                props.next(state.currentIndex)
              }>
            </div>

          </div>
          <ThumbnailCarousel currentSelected={state.currentSelected} width={props.thumbnailsWidth} images={state.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={state.currentSelected} height={props.thumbnailsMiniHeight} images={state.images} select={props.select} />
        </div>)
    }
    if (state.currentIndex === state.images.length - 1) {
      return (
        <div>
          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <div id="af-image-prev"
              onClick={() =>
                props.prev(state.currentIndex)
              }></div>

            <img
              style={{ marginLeft: (-mousePosition.x) / 2, marginTop: (-mousePosition.y) / 2 }}
              id={props.imgId} onClick={props.click} src={props.images[props.currentIndex]['url']}>
            </img>
          </div>
          <ThumbnailCarousel currentSelected={state.currentSelected} width={props.thumbnailsWidth} images={state.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={state.currentSelected} height={props.thumbnailsMiniHeight} images={state.images} select={props.select} />
        </div>)
    }
    return (
      <div>
        <div id="af-image-container" style={props.width}>
          <div id="af-image-expand"
            onClick={props.shrink}
          ></div>

          <div id="af-image-prev"
            onClick={() =>
              props.prev(state.currentIndex)
            }></div>

          <img
            style={{ marginLeft: (-mousePosition.x) / 2, marginTop: (-mousePosition.y) / 2 }}
            id={props.imgId}
            onClick={props.click}
            src={state.images[state.currentIndex]['url']}></img>

          <div id="af-image-next"
            onClick={() =>
              props.next(state.currentIndex)
            }></div>
        </div>
        <ThumbnailCarousel currentSelected={state.currentSelected} width={props.thumbnailsWidth} images={state.images} select={props.select} />
        <ThumbnailCarouselMini currentSelected={state.currentSelected} height={props.thumbnailsMiniHeight} images={state.images} select={props.select} />
      </div>)



  } else {

    if (state.currentIndex === 0) {
      return (
        <div id="af-click-to-check">



          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <img
              id={state.imgId}
              onClick={props.click}
              src={state.images[state.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                props.next(state.currentIndex)
              }>
            </div>

          </div>
          <ThumbnailCarousel currentSelected={state.currentSelected} width={props.thumbnailsWidth} images={state.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={state.currentSelected} height={props.thumbnailsMiniHeight} images={state.images} select={props.select} />
        </div>)
    }
    if (state.currentIndex === state.images.length - 1) {
      return (
        <div>
          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <div id="af-image-prev"
              onClick={() =>
                props.prev(state.currentIndex)
              }></div>

            <img id={state.imgId} onClick={props.click} src={state.images[state.currentIndex]['url']}>
            </img>
          </div>
          <ThumbnailCarousel currentSelected={state.currentSelected} width={props.thumbnailsWidth} images={state.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={state.currentSelected} height={props.thumbnailsMiniHeight} images={state.images} select={props.select} />
        </div>)
    }
    return (
      <div>
        <div id="af-image-container" style={props.width}>
          <div id="af-image-expand"
            onClick={props.shrink}
          ></div>

          <div id="af-image-prev"
            onClick={() =>
              props.prev(state.currentIndex)
            }></div>

          <img id={state.imgId}
            onClick={props.click}
            src={state.images[state.currentIndex]['url']}></img>

          <div id="af-image-next"
            onClick={() =>
              props.next(state.currentIndex)
            }></div>
        </div>
        <ThumbnailCarousel currentSelected={state.currentSelected} width={props.thumbnailsWidth} images={state.images} select={props.select} />
        <ThumbnailCarouselMini currentSelected={state.currentSelected} height={props.thumbnailsMiniHeight} images={state.images} select={props.select} />
      </div>)
  }
}

export default ImageGallery;