import React from 'react';

class ThumbnailCarouselArrowUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
<div id="af-thumbnail-arrow-up" onClick={this.props.click}>UP</div>
    )
  }

}

export default ThumbnailCarouselArrowUp;