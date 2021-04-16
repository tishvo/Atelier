import React from 'react';
import StyleSelectorOption from './StyleSelectorOption.jsx'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div>
      <span>
      {this.props.styles.map((style, index) =>
      <StyleSelectorOption photoId={style.style_id} image={style.photos[0].thumbnail_url} index={index} key={index} click={this.props.click}/>
      )}
      </span>

    </div>)
  }
}

export default StyleSelector;