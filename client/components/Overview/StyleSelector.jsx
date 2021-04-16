import React from 'react';
import StyleSelectorOption from './StyleSelectorOption.jsx'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div id="style-selector">

      {this.props.styles.map((style, index) => {
        console.log('this is index: ', index)



        return <StyleSelectorOption photoId={style.style_id} image={style.photos[0].thumbnail_url} index={index} key={index} click={this.props.click} />



      }





      )}


    </div>)
  }
}

export default StyleSelector;