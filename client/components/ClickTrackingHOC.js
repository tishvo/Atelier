import React from 'react';

export default function PrivacyHOC(WrappedComponent) {
  return (
    class PrivacyHOC extends React.Component {
      constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
      }

      onClick (e) {
        var date = new Date()
        // console.log('click tracking timestamp: ', date)
        // console.log('click tracking element: ', e.target)
        // console.log('click tracking widget: ', this.props.widget)


        if (localStorage.websiteTraffic[this.props.widget][e.target].numClicks) {
          localStorage.websiteTraffic[this.props.widget][e.target].numClicks ++

        } else {
          localStorage.websiteTraffic[this.props.widget][e.target].numClicks = 1
        }


        if(localStorage.websiteTraffic[this.props.widget][e.target].datesClicked)

        console.log('localStorage updated: ', localStorage)

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

// localStorage -- websiteTraffic -- widget -- Overview: {<div>Hi</div>: {numClicks: 3, datesClicked: ...}}