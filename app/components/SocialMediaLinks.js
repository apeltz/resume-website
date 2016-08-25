import React from 'react';

export default class SocialMediaLinks extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div id="socialMediaLinks">
            <div><i className="fa fa-linkedin"></i></div>
            <div><i className="fa fa-github"></i></div>
            <div><i className="fa fa-facebook"></i></div>
            <div><i className="fa fa-twitter"></i></div>
          </div>
        )
    }

} //End of class SocialMediaLinks
