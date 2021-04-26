import React from 'react';

class ProductInfoShare extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div id="af-share-buttons">
      <span>

        <div className="af-fb-share" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a id="af-fb-share" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>

        <a id="af-twitter-share" target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

        <a id="af-pinterest-share" target="_blank" data-pin-do="buttonFollow" href="https://www.pinterest.com/pinterest/">Pinterest</a>

      </span>
    </div>)
  }
}

export default ProductInfoShare;