import React from 'react';

class ThumbnailCarouselArrowDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
<div id="af-thumbnail-arrow-down" onClick={this.props.click}>DWN</div>
    )
  }

}

export default ThumbnailCarouselArrowDown;