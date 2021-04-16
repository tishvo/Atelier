import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<img id="af-main-image" src={this.props.images} />)
  }
}

export default ImageGallery;