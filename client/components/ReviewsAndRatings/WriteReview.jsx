import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";



class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecommend: '',
      starObj: {
        '1': <div value='1'><FaStar id='1'/><FaRegStar id='2'/><FaRegStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
        '2': <div value='2'><FaStar id='1'/><FaStar id='2'/><FaRegStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
        '3': <div value='3'><FaStar id='1'/><FaStar id='2'/><FaStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
        '4': <div value='4'><FaStar id='1'/><FaStar id='2'/><FaStar id='3'/><FaStar id='4'/><FaRegStar id='5'/></div>,
        '5': <div value='5'><FaStar id='1'/><FaStar id='2'/><FaStar id='3'/><FaStar id='4'/><FaStar id='5'/></div>
      },
      shownStar: <div></div>,
      oneStar: <div value='1'><FaStar id='1'/><FaRegStar id='2'/><FaRegStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
      twoStar: <div value='2'><FaStar id='1'/><FaStar id='2'/><FaRegStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
      threeStar: <div value='3'><FaStar id='1'/><FaStar id='2'/><FaStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
      fourStar: <div value='4'><FaStar id='1'/><FaStar id='2'/><FaStar id='3'/><FaStar id='4'/><FaRegStar id='5'/></div>,
      fiveStar: <div value='5'><FaStar id='1'/><FaStar id='2'/><FaStar id='3'/><FaStar id='4'/><FaStar id='5'/></div>,
      noStars: <div value='0'><FaRegStar id='1'/><FaRegStar id='2'/><FaRegStar id='3'/><FaRegStar id='4'/><FaRegStar id='5'/></div>,
      chosenStars: false,
      numStarsChosen: '',
      hoverValue: ''
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.changeStarsHover = this.changeStarsHover.bind(this);
  }

  componentDidMount() {
    if (this.state.hoverValue = 1) {
      this.setState({
        shownStar: this.state.oneStar
      })
    } else {
      this.setState({
        shownStar: this.state.noStars
      })
    }
  }

  onChangeValue(event) {
    this.setState({
      selectedRecommend: event.target.value
    })
  }

  //change the number of stars shown when hovering, before a selection is made
  changeStarsHover(event) {
    // get value of mouseover
    console.log('mouseover: ', event.target.id);
    this.setState({
      hoverValue: event.target.id
    });
    console.log('state', this.state.hoverValue);
  }

  //change the state value once a rating is clicked
  // changeStarsClick(event) {

  // }

  render() {
    return (
      <div>
        <form>

          <div onMouseEnter={this.changeStarsHover}>{ this.state.shownStar }</div>
          <input type='text' placeholder='Username (or nickname)' style={{ width: '12.5%' }}></input>
          <input type='text' placeholder='What is your email?' style={{ width: '12.5%' }}></input>
          <div><input type='text' style={{ width: '25%' }} placeholder='(Write your review)' ></input></div>
          <div>Would you recommend this product to a friend?
            <input type='radio' value='yes' checked={this.state.selectedRecommend === 'yes'} onChange={this.onChangeValue}></input>YES!
            <input type='radio' value='no' checked={this.state.selectedRecommend === 'no'} onChange={this.onChangeValue}></input> NO!
          </div>
          <input type='submit' placeholder='submit' onClick={this.props.hide}></input>
        </form>
      </div>
    )
  }
}

export default WriteReview;