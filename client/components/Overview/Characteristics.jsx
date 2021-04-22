import React from 'react';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div id="af-characteristics">
      100% GMO and pesticide free
      Tested on the cutest animals
      Made with corn
      {this.props.features.map((obj, index) =>
      <div>{obj.feature}: {obj.value}</div>

      )}

    </div>)
  }

}

export default Characteristics;