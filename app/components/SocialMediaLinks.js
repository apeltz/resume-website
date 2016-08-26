import React from 'react';

export default class SocialMediaLinks extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div id="socialMediaLinks">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/apeltz">
              <div><i className="fa fa-linkedin"></i></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/apeltz">
              <div><i className="fa fa-github"></i></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/aaron.peltz">
              <div><i className="fa fa-facebook"></i></div>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/AaronPeltz">
              <div><i className="fa fa-twitter"></i></div>
              </a>
          </div>
        )
    }

} //End of class SocialMediaLinks
