import React from 'react';
import StyleSelector from './StyleSelector.jsx'
import ThumbnailCarousel from './ThumbnailCarousel.jsx'
import ThumbnailCarouselMini from './ThumbnailCarouselMini.jsx'

const ImageGallery = (props) => {


  // checkMouse(e) {
  //   console.log('this is e', e)
  //   console.log('this is e.pageX, ', e.pageX)
  //   console.log('thi is e.pageY, ', e.pageY)
  // }





    if (props.currentIndex === 0) {
      return (
        <div id="af-click-to-check">



          <div id="af-image-container" style={props.width}>
            <div id="af-image-expand"
              onClick={props.shrink}></div>

            <img id={props.imgId}
            onClick={props.click}
              src={props.images[props.currentIndex]['url']} >
            </img>

            <div id="af-image-next"
              onClick={() =>
                props.next(props.currentIndex)
              }>
        </div>

          </div>
          <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select}/>
          <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select}/>
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
        <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select}/>
        <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select}/>
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
      <ThumbnailCarousel currentSelected={props.currentSelected} width={props.thumbnailsWidth} images={props.images} select={props.select}/>
      <ThumbnailCarouselMini currentSelected={props.currentSelected} height={props.thumbnailsMiniHeight} images={props.images} select={props.select}/>
      </div>)

}

export default ImageGallery;