import React from 'react';
import { GrFacebook, GrTwitter, GrPinterest } from 'react-icons/gr';

class ProductInfoShare extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div id="af-share-buttons">


        <a id="af-fb-share" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore"><GrFacebook /></a>

        <a id="af-twitter-share" target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false"><GrTwitter/></a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

        <a id="af-pinterest-share" target="_blank" data-pin-do="buttonFollow" href="https://www.pinterest.com/pinterest/"><GrPinterest/></a>

    </div>)
  }
}

export default ProductInfoShare;