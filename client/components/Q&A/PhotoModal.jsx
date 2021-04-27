import React from 'react';
import ReactDOM from 'react-dom';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose(e) {
    e.preventDefault();
    this.props.onClose && this.props.onClose(e);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="qModal qContent" id="qModal">
        <div className="tv_photo_upload">Upload your photos</div>
        <form>
          <input type="file" multiple/>
        </form>
        <button className="tv_modal_button" onClick={this.onClose}>Submit</button>
        </div>
    )
  }
}


export default PhotoModal;