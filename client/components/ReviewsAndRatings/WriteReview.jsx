import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import ReviewStars from './ReviewStars.jsx';




class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecommend: '',
      starObj: {
        '0': <div value='0'><FaRegStar id='1' /><FaRegStar id='2' /><FaRegStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' /></div>,
        '1': <div value='1'><FaStar id='1' /><FaRegStar id='2' /><FaRegStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' />Bruh</div>,
        '2': <div value='2'><FaStar id='1' /><FaStar id='2' /><FaRegStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' />Meh</div>,
        '3': <div value='3'><FaStar id='1' /><FaStar id='2' /><FaStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' />Fair</div>,
        '4': <div value='4'><FaStar id='1' /><FaStar id='2' /><FaStar id='3' /><FaStar id='4' /><FaRegStar id='5' />Good</div>,
        '5': <div value='5'><FaStar id='1' /><FaStar id='2' /><FaStar id='3' /><FaStar id='4' /><FaStar id='5' /><span>Great</span></div>
      },
      chosenStar: '0',
      reviewChoiceArray: [],
      charDescriptionObj: {
        'Size': ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
        'Width': ['Too Narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
        'Comfort': ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
        'Quality': ['Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect'],
        'Length': ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs Long'],
        'Fit': ['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs Long']
      }

    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onClickStars = this.onClickStars.bind(this);
    this.changeReview = this.changeReview.bind(this);
    this.ratingButtonDisplay = this.ratingButtonDisplay.bind(this);

  }

  onChangeValue(event) {
    console.log(event.target.value)
    this.setState({
      selectedRecommend: event.target.value
    })
  }

  onClickStars(e) {
    var id = e.target.id;
    if (id.length > 0) {
      this.setState({
        chosenStar: id
      })
    }
  }

  changeReview(e) {
    console.log('HELLO: ', e.target.innerHTML);
  }

  //create the set of radio buttons so that the correct ones/number show up
  ratingButtonDisplay(obj) {
    var arr = [];
    var newArr = [];
    for (var key in obj) {
      arr.push([key, obj[key]])
    }
    arr.map((char, index) => {
      newArr.push(char)
    })
    return newArr;
  }




  render() {
    console.log('do they recommend?: ', this.state.selectedRecommend)
    console.log('how many stars does it get?: ', this.state.chosenStar)
    return (
      <div className="mm-modal mm-display">
        <div className="mm-modal-main">
          <form>
            <div onClick={this.onClickStars} >{this.state.starObj[this.state.chosenStar]}</div>
            <input type='text' placeholder='Username' style={{ width: '12.5%' }}></input>
            <input type='text' placeholder='Email' style={{ width: '12%' }}></input>
            <div><textarea placeholder='THIS IS NOT A TEST'></textarea></div>
            {this.ratingButtonDisplay(this.props.charData).map((char, index) => {
              return (
                <div>
                  <strong>{char[0]}</strong>
                  1 <input type='radio' value={this.state.charDescriptionObj[char[0]][1]} name={char[0]}></input>{this.state.charDescriptionObj[char[0]][0]}
                  2 <input type='radio' value={this.state.charDescriptionObj[char[0]][2]} name={char[0]}></input>{this.state.charDescriptionObj[char[0]][1]}
                  3 <input type='radio' value={this.state.charDescriptionObj[char[0]][3]} name={char[0]}></input>{this.state.charDescriptionObj[char[0]][2]}
                  4 <input type='radio' value={this.state.charDescriptionObj[char[0]][4]} name={char[0]}></input>{this.state.charDescriptionObj[char[0]][3]}
                  5 <input type='radio' value={this.state.charDescriptionObj[char[0]][5]} name={char[0]}></input>{this.state.charDescriptionObj[char[0]][4]}
                </div>
              )
            })}
            <div>Would you recommend this product to a friend?
              <input type='radio' value='yes' checked={this.state.selectedRecommend === 'yes'} onChange={this.onChangeValue}></input>YES!
              <input type='radio' value='no' checked={this.state.selectedRecommend === 'no'} onChange={this.onChangeValue}></input> NO!
            </div>
            <input type='submit' value="Submit" onClick={this.props.hide}></input>
            <input type='submit' value="Close" onClick={this.props.hide}></input>
          </form>

        </div>
      </div>
    )
  }
}

export default WriteReview;