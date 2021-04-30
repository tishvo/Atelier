import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import ReviewStars from './ReviewStars.jsx';
import axios from 'axios';




class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecommend: null,
      starObj: {
        '0': <div value='0'><FaRegStar id='1' /><FaRegStar id='2' /><FaRegStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' /></div>,
        '1': <div value='1'><FaStar id='1' /><FaRegStar id='2' /><FaRegStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' />Poor</div>,
        '2': <div value='2'><FaStar id='1' /><FaStar id='2' /><FaRegStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' />Fair</div>,
        '3': <div value='3'><FaStar id='1' /><FaStar id='2' /><FaStar id='3' /><FaRegStar id='4' /><FaRegStar id='5' />Average</div>,
        '4': <div value='4'><FaStar id='1' /><FaStar id='2' /><FaStar id='3' /><FaStar id='4' /><FaRegStar id='5' />Good</div>,
        '5': <div value='5'><FaStar id='1' /><FaStar id='2' /><FaStar id='3' /><FaStar id='4' /><FaStar id='5' /><span>Great</span></div>
      },
      chosenStar: '1',
      reviewChoiceArray: [],
      charDescriptionObj: {
        'Size': ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
        'Width': ['Too Narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
        'Comfort': ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
        'Quality': ['Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect'],
        'Length': ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs Long'],
        'Fit': ['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs Long']
      },
      reviewSummaryLength: 0,
      reviewLength: 0
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onClickStars = this.onClickStars.bind(this);
    this.ratingButtonDisplay = this.ratingButtonDisplay.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onReviewChange = this.onReviewChange.bind(this);
    this.onSummaryChange = this.onSummaryChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.charIdGet = this.charIdGet.bind(this);
    this.changeStuff = this.changeStuff.bind(this);
    this.stateUpdateForChars = this.stateUpdateForChars.bind(this);
  }

  componentDidMount() {
    var data = this.props.charData;
    var obj = {};
    for (var key in data) {
      obj[this.charIdGet(key)] = null;
    }
    this.setState({
      charObject: obj
    })
  }

  charIdGet(str) {
    return this.props.charData[str].id;
  }

  onChangeValue(event) {
    if (event.target.value === 'yes') {
      this.setState({
        selectedRecommend: true
      })
    } else if (event.target.value === 'no') {
      this.setState({
        selectedRecommend: false
      })
    }
  }

  onClickStars(e) {
    var id = e.target.id;
    if (id.length > 0) {
      this.setState({
        chosenStar: id
      })
    }
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
    if (e.target.value.length > 0) {

      this.setState({usernameGO: true})
    } else if (e.target.value.length = 0) {
      this.setState({usernameGO: false})
    }
  }
  //sets state for the email, and updates its null tracker
  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
    if (e.target.value.length > 0) {
      this.setState({emailGO: true})
    } else if (e.target.value.length = 0) {
      this.setState({emailGO: false})
    }
  }
  //sets state for the review summary and keeps track of how long it is
  onSummaryChange(e) {
    this.setState({
      summary: e.target.value
    })
    if (this.state.summary) {
      this.setState({
        reviewSummaryLength: e.target.value.length
      })
    }
  }
  //sets state for the review body and keeps track of how long the body is
  onReviewChange(e) {
    this.setState({
      review: e.target.value
    })
    if (this.state.review) {
      this.setState({
        reviewLength: e.target.value.length
      })
    }
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

  informationPost() {
    var data = {
      product_id: this.props.itemId,
      rating: Number(this.state.chosenStar),
      summary: this.state.summary,
      body: this.state.review,
      recommend: this.state.selectedRecommend,
      name: this.state.username,
      email: this.state.email,
      characteristics: this.state.charObject
    }
    console.log('THIS IS THE IMPORTANT DATA FOR A POST: ', data)
    axios.post('/reviews', data)
    .then((response) => {
      console.log('review has been added')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  stateUpdateForChars() {
    console.log('the reviewSummaryLength: ', this.state.reviewSummaryLength)
    if (this.state.reviewSummaryLength >= 60) {
      this.setState({
        summaryError: true
      })
    } else if (this.state.reviewSummaryLength < 60) {
      this.setState({
        summaryError: false
      })
    }
    //if the review length is < 50, it wont send, alert needs to be more than 50 characters
    if (this.state.reviewLength < 50) {
      this.setState({
        reviewTooShort: true
      })
    } else {
      this.setState({
        reviewTooShort: false
      })
    }
    //if the review length is over 1000 characters alert needs to be less than 1000 characters
    if (this.state.reviewLength > 1000) {
      this.setState({
        reviewTooLong: true
      })
    } else {
      this.setState({
        reviewTooLong: false
      })
    }
  }

  onSubmitClick(e) {
    e.preventDefault();
    this.stateUpdateForChars();
    console.log('this is getting clicked', this.state.reviewSummaryLength, this.state.reviewLength, this.state.chosenStar)
    /* if the review summary and review are the right length */
    if ((this.state.reviewSummaryLength <= 60) && (this.state.reviewLength >= 50 && this.state.reviewLength <= 1000)) {
      console.log('inside the submission')
      //this.informationPost();
      this.props.close();
    } else {
      console.log('this is not going to work')
    }
  }

  changeStuff(e) {
    console.log('char click', e.target.value, e.target.name)
    var obj = this.state.charObject;
    obj[this.charIdGet(e.target.name)] = e.target.value;
    this.setState({
      charObj: obj
    })


  }

  render() {
    console.log('do they recommend?: ', this.state.selectedRecommend, typeof this.state.selectedRecommend)
    console.log('how many stars does it get?: ', this.state.chosenStar)
    console.log('this is the username, email, and review: ', this.state.username, this.state.email, this.state.review)
    console.log('lengths from input fields in writereveiw: ', this.state.reviewSummaryLength, this.state.reviewLength)
    console.log('this is the charData: ', this.props.charData)
    console.log('this is the itemId: ', this.props.itemId)
    console.log('this is the state object that will get sent in data: ', this.state.charObject);


    return (
      <div className="mm-modal mm-display">
        <div className="mm-modal-main">Write a Review!
          <form>
            <div onClick={this.onClickStars} >{this.state.starObj[this.state.chosenStar]}</div>
            <div>
              <div><input type='text' placeholder='Username- Example: jackson11' style={{ width: '17%' }} onChange={this.onUsernameChange} ></input></div>
              <div>For privacy reasons, do not use your full name or email address</div>
            </div>
            <div>
              <div><input type='text' placeholder='Email- Example: jackson11@email.com' style={{ width: '17%' }} onChange={this.onEmailChange}></input></div>
              <div>For authentication reasons, you will not be emailed</div>
            </div>
            <div>
              {this.state.reviewSummaryLength > 60 ?
              <div><textarea type='text' placeholder='Example: Best Purchase Ever!' onChange={this.onSummaryChange} cols="40" rows="2">{this.state.summary}</textarea>
              <p>Max 60 characters, there are currently {this.state.reviewSummaryLength}</p></div>
              : <textarea type='text' placeholder='Example: Best Purchase Ever!' onChange={this.onSummaryChange} cols="40" rows="2"></textarea>}

              {this.state.summaryError ? <div style={{color:"red"}}>Summary must be less than 60 characters</div> : null}
            </div>
            <div>
              <textarea placeholder='Why did you like the product or not?' onChange={this.onReviewChange} cols="40" rows="5"></textarea>
              {this.state.reviewTooShort ? <div style={{color:"red"}}>Review must be at least 50 characters</div> : null}
              {this.state.reviewTooLong ? <div style={{color:"red"}}>Review must be less than 1000 characters</div> : null}
            </div>
            {this.ratingButtonDisplay(this.props.charData).map((char, index) => {
              let questionLabel = this.state.charDescriptionObj[char[0]];
              let word = char[0];
              return (
                <div key={index}>
                  <strong>{char[0]}</strong>
                  {/* This is a comment, add more of these */}
                  <input type='radio' value={1} name={char[0]} onChange={this.changeStuff}></input>{questionLabel[0]}
                  <input type='radio' value={2} name={char[0]} onChange={this.changeStuff}></input>{questionLabel[1]}
                  <input type='radio' value={3} name={char[0]} onChange={this.changeStuff}></input>{questionLabel[2]}
                  <input type='radio' value={4} name={char[0]} onChange={this.changeStuff}></input>{questionLabel[3]}
                  <input type='radio' value={5} name={char[0]} onChange={this.changeStuff}></input>{questionLabel[4]}
                </div>
              )
            })}
            <div>Would you recommend this product to a friend?
              <input type='radio' value='yes' checked={this.state.selectedRecommend === true} onChange={this.onChangeValue}></input>YES!
              <input type='radio' value='no' checked={this.state.selectedRecommend === false} onChange={this.onChangeValue}></input> NO!
            </div>
            <input type='submit' value="Submit" onClick={this.onSubmitClick}></input>
            <input type='submit' value="Close" onClick={this.props.hide}></input>
          </form>

        </div>
      </div>
    )
  }
}

export default WriteReview;