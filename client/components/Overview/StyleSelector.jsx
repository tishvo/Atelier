import React from 'react';
import StyleSelectorOption from './StyleSelectorOption.jsx'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (<div id="af-style-selector">
      {this.props.styles.map((style, index) => {

        if (index === this.props.selected) {

          return <StyleSelectorOption selected={true} photoId={style.style_id} image={style.photos[0].thumbnail_url} index={index} key={index} click={this.props.click} />

        } else {

          return <StyleSelectorOption selected={false} photoId={style.style_id} image={style.photos[0].thumbnail_url} index={index} key={index} click={this.props.click} />
        }
      }
      )}
    </div>)
  }
}

export default StyleSelector;