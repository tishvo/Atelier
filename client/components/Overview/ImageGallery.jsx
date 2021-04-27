import React, { useState, useEffect } from 'react';
import StyleSelector from './StyleSelector.jsx'
import ThumbnailCarousel from './ThumbnailCarousel.jsx'
import ThumbnailCarouselMini from './ThumbnailCarouselMini.jsx'

const ImageGallery = (props) => {

  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null
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

  // if (props.hasNothing) {
  //   console.log('nothing!')
  //   return null;
  // }

  console.log('something!')
  if (props.imgId === "af-main-image-xl") {


    if (props.currentIndex === 0) {
      return (
        <div id="af-click-to-check">

          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <img
              style={{ marginLeft: (-mousePosition.x) / 2, marginTop: (-mousePosition.y) / 2 }}
              id={props.imgId}
              onClick={props.click}
              src={props.images[props.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                props.next(props.currentIndex)
              }>
            </div>

          </div>
          <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select} />
        </div>)
    }
    if (props.currentIndex === props.images.length - 1) {
      return (
        <div>
          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <div id="af-image-prev"
              onClick={() =>
                props.prev(props.currentIndex)
              }></div>

            <img
              style={{ marginLeft: (-mousePosition.x) / 2, marginTop: (-mousePosition.y) / 2 }}
              id={props.imgId} onClick={props.click} src={props.images[props.currentIndex]['url']}>
            </img>
          </div>
          <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select} />
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
              props.prev(props.currentIndex)
            }></div>

          <img
            style={{ marginLeft: (-mousePosition.x) / 2, marginTop: (-mousePosition.y) / 2 }}
            id={props.imgId}
            onClick={props.click}
            src={props.images[props.currentIndex]['url']}></img>

          <div id="af-image-next"
            onClick={() =>
              props.next(props.currentIndex)
            }></div>
        </div>
        <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select} />
        <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select} />
      </div>)



  } else {

    if (props.currentIndex === 0) {
      return (
        <div id="af-click-to-check">



          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <img
              id={props.imgId}
              onClick={props.click}
              src={props.images[props.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                props.next(props.currentIndex)
              }>
            </div>

          </div>
          <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select} />
        </div>)
    }
    if (props.currentIndex === props.images.length - 1) {
      return (
        <div>
          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <div id="af-image-prev"
              onClick={() =>
                props.prev(props.currentIndex)
              }></div>

            <img id={props.imgId} onClick={props.click} src={props.images[props.currentIndex]['url']}>
            </img>
          </div>
          <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select} />
          <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select} />
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
              props.prev(props.currentIndex)
            }></div>

          <img id={props.imgId}
            onClick={props.click}
            src={props.images[props.currentIndex]['url']}></img>

          <div id="af-image-next"
            onClick={() =>
              props.next(props.currentIndex)
            }></div>
        </div>
        <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select} />
        <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select} />
      </div>)
  }
}

export default ImageGallery;