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
    this.onClickStars = this.onClickStars.bind(this);
    this.selectStars = this.selectStars.bind(this);
  }

  componentDidMount() {

  }

  onChangeValue(event) {
    this.setState({
      selectedRecommend: event.target.value
    })
  }

  onClickStars(e) {
    //console.log('star id: ', e.target.id)
    this.setState({
      selectedStar: e.target.id
    })
  }

  selectStars(str) {
    //console.log('THIS IS THE STAR DIV TO SHOW', this.state.starObj[str])
    return this.state.starObj[str]
  }



  render() {
    return (
      <div>
        <form>

          <div onClick={this.onClickStars}>{ this.selectStars(this.onClickStars) }</div>
          <input type='text' placeholder='Username' style={{ width: '12.5%' }}></input>
          <input type='text' placeholder='Email' style={{ width: '12%' }}></input>
          <div><textarea placeholder='THIS IS NOT A TEST'></textarea></div>
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