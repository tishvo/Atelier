import React from 'react';

class StyleSelectorOption extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <img id='af-style-thumbnail' src={this.props.image} onClick={ () => {
        return this.props.click(this.props.index)
      }
      }></img>
    )
  }
}

export default StyleSelectorOption;