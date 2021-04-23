import React from 'react';

export default function PrivacyHOC(WrappedComponent) {
  return (
    class PrivacyHOC extends React.Component {
      constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
      }

      onClick (e) {
        console.log('click tracking timestamp: ', new Date())
        console.log('click tracking element: ', e.target)
        console.log('click tracking widget: ', this.props.widget)

      }
      render() {

          return (
            <div onClick={this.onClick}>
              <WrappedComponent {...this.props} />
            </div>
          )


      }
    }
  )
};