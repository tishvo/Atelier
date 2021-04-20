import React from 'react';


class StyleSelectorOption extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.selected) {

      return (

        <div>
          <img id='af-style-thumbnail-selected'>
          </img>
          <img id='af-style-thumbnail'
            src={this.props.image}
            onClick={() => {
              return this.props.click(this.props.index)
            }
            }>

          </img>
        </div>




      )

    } else {

      return (
        <img id='af-style-thumbnail'
          src={this.props.image}
          onClick={() => {
            return this.props.click(this.props.index)
          }
          }>

        </img>
      )
    }
  }
}

export default StyleSelectorOption;