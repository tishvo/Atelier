import React from 'react';

class ProductInfoShare extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div id="af-share-buttons">
      <span>

        <div className="af-fb-share" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small"><a id="af-fb-share" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
        {/* <img id="af-fb-share"></img> */}

        <a id="af-twitter-share" target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

        <a id="af-pinterest-share" target="_blank" data-pin-do="buttonFollow" href="https://www.pinterest.com/pinterest/">Pinterest</a>
        {/* <img id="af-twitter-share"></img> */}


        {/* <img id="af-pinterest-share"></img> */}
      </span>
    </div>)
  }
}

export default ProductInfoShare;

// you might need to put this in the main index.html file:

{/* <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="gDM1uFby"></script> */}



// EXTRA STUFF

{/* <div className="af-fb-share-button"
      data-href="http://localhost:8080/" data-layout="button_count" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A8080%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
          Share
        </a>

      </div> */}


{/* <iframe id="af-shary-share" width="94" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */ }