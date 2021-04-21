import React from 'react';
import ThumbnailCarouselPic from './ThumbnailCarouselPic.jsx'
import ThumbnailCarouselArrowUp from './ThumbnailCarouselArrowUp.jsx'
import ThumbnailCarouselArrowDown from './ThumbnailCarouselArrowDown.jsx'

class ThumbnailCarousel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   startIndex: 0,
    //   endIndex: 6
    // }

    // this.downArrow = this.downArrow.bind(this);
    // this.upArrow = this.upArrow.bind(this);
  }

  // downArrow() {
  //   console.log('clicked down!')
  //   this.setState({
  //     startIndex: this.state.startIndex + 1,
  //     endIndex: this.state.endIndex + 1
  //   })

  // }

  // upArrow() {
  //   console.log('clicked up!')
  //   this.setState({
  //     startIndex: this.state.startIndex - 1,
  //     endIndex: this.state.endIndex - 1
  //   })

  // }

  render() {
    let imageArray = this.props.images;
    // e.g. [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // let slicedArray = imageArray.slice(this.state.startIndex, this.state.endIndex)

    return (
      <div id="af-thumbnail-carousel-box">
        <div id="af-thumbnail-carousel">
          {imageArray.map((imgUrl, index) => {
            return <ThumbnailCarouselPic key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
          })}
        </div>
      </div>

    )

    // if (imageArray.length > 7) {

    //   if (this.state.startIndex === 0) {

    //   return (
    //     <div id="af-thumbnail-carousel">
    //       <div id="af-thumbnail-arrow-placeholder"></div>
    //       {slicedArray.map((imgUrl, index) => {
    //         return <ThumbnailCarouselPic key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
    //       })}
    //       <ThumbnailCarouselArrowDown click={this.downArrow}/>
    //     </div>)
    //   } else if (this.state.endIndex >= imageArray.length) {
    //     return (
    //       <div id="af-thumbnail-carousel">
    //         <ThumbnailCarouselArrowUp click={this.upArrow}/>
    //         {slicedArray.map((imgUrl, index) => {
    //           return <ThumbnailCarouselPic key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
    //         })}
    //       </div>)

    //   } else {

    //     return (
    //       <div id="af-thumbnail-carousel">
    //         <ThumbnailCarouselArrowUp click={this.upArrow}/>
    //         {slicedArray.map((imgUrl, index) => {
    //           return <ThumbnailCarouselPic key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
    //         })}
    //         <ThumbnailCarouselArrowDown click={this.downArrow}/>
    //       </div>)

    //   }

    // } else {
    //   return (
    //     <div id="af-thumbnail-carousel">
    //       <div id="af-thumbnail-arrow-placeholder"></div>
    //       {slicedArray.map((imgUrl, index) => {
    //         return <ThumbnailCarouselPic key={index} index={index} imgUrl={imgUrl} select={this.props.select} />
    //       })}
    //     </div>)

    // }


  }

}

export default ThumbnailCarousel;