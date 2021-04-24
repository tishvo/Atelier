import React from 'react';

class ProductInfoHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      starArray: null,
      numberOfReviews: this.props.numberOfReviews
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.numberOfReviews !== prevProps.numberOfReviews) {
      this.setState({
        numberOfReviews: this.props.numberOfReviews
      })
    }
  }

  render() {
    console.log('Number of reviews: ', this.state.numberOfReviews)


    if (this.props.stars) {

      var numArray = []
      var newNum = this.props.stars
      for (var i = 1; i < this.props.stars; i++) {
        numArray.push(1);
        newNum--
      }
      numArray.push(newNum)

      if (this.props.salePrice) {

        return (<div>
         <a onClick={ () => {
           window.scrollTo({
             top: 2000,
             left: 0,
             behavior: 'smooth'
           });
         }}> Read all {this.state.numberOfReviews} reviews! </a>
          <span id="af-stars">
            {numArray.map((num, index) => {
              if (num === 1 || num > 0.872) {
                return <div id="af-full-star" key={index}>1</div>
              } else if (num >= 0.63 && num <= 0.872) {
                return <div id="af-three-quarter-star" key={index}>0.75</div>
              } else if (num > 0.38 && num <= 0.62) {
                return <div id="af-half-star" key={index}>0.5</div>
              } else if (num >= 0.12 && num <= 0.38) {
                return <div id="af-quarter-star" key={index}>0.25</div>
              }
            })
            }
          </span>
          <h3>{this.props.name}</h3> <br />
          <h5>{this.props.slogan}</h5>
          <em id="af-strikethrough">${this.props.price}</em> On sale!
          <em> ${this.props.salePrice}</em> <br />
      Style: {this.props.styleName}
        </div>)

      } else {
        return (<div>
           <a onClick={ () => {
           window.scrollTo({
             top: 1000,
             left: 1000,
             behavior: 'smooth'
           });
         }}> Read all {this.state.numberOfReviews} reviews! </a>
          <span id="af=stars">
            {numArray.map((num, index) => {
              if (num === 1 || num > 0.872) {
                return <div id="af-full-star" key={index}>1</div>
              } else if (num >= 0.63 && num <= 0.872) {
                return <div id="af-three-quarter-star" key={index}>0.75</div>
              } else if (num > 0.38 && num <= 0.62) {
                return <div id="af-half-star" key={index}>0.5</div>
              } else if (num >= 0.12 && num <= 0.38) {
                return <div id="af-quarter-star" key={index}>0.25</div>
              }
            })
            }
          </span>
          <h3>{this.props.name}</h3> <br />
          <h5>{this.props.slogan}</h5>
          <em>${this.props.price}</em> <br />
          {this.props.styleName}
        </div>)
      }
    } else {
      if (this.props.salePrice) {

        return (<div>
          This item has not been rated<br />
          <h3>{this.props.name}</h3> <br />
          <h5>{this.props.slogan}</h5>
          <em id="af-strikethrough">${this.props.price}</em> On Sale!
          <em> ${this.props.salePrice}</em> <br />
      Style: {this.props.styleName}
        </div>)
      } else {
        return (<div>
          This item has not been rated<br />
          <h3>{this.props.name}</h3> <br />
          <h5>{this.props.slogan}</h5>
          <em>${this.props.price}</em> <br />
          {this.props.styleName}
        </div>)
      }
    }

  }
}

export default ProductInfoHead;