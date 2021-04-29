import React from 'react';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div id="af-characteristics">
      {/* 100% GMO and pesticide free <br/>
      Tested on the cutest animals <br/>
      Made with corn <br/> */}
      {this.props.features.map((obj, index) =>
      <div key={index}>{obj.feature}: {obj.value}</div>

      )}

    </div>)
  }

}

export default Characteristics;