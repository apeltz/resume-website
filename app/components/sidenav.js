import React from 'react';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidebar">
                <h1 id="nametitlebar">AARON PELTZ</h1>
                <img id="profilepic" src="./client/media/placeholderheadshot.png"></img>
                <ul>
                    <li onClick={this.props.changeView} data-section="About" className="hvr-bounce-to-right"><i className="fa fa-user"></i><span>About</span></li>
                    <li onClick={this.props.changeView} data-section="Portfolio" className="hvr-bounce-to-right"><i className="fa fa-suitcase"></i><span>Portfolio</span></li>
                    <li onClick={this.props.changeView} data-section="Resume" className="hvr-bounce-to-right"><i className="fa fa-file-text"></i><span>Resume</span></li>
                    <li onClick={this.props.changeView} data-section="Blog" className="hvr-bounce-to-right"><i className="fa fa-comment"></i><span>Blog</span></li>
                    <li onClick={this.props.changeView} data-section="Contact" className="hvr-bounce-to-right"><i className="fa fa-envelope"></i><span>Contact</span></li>
                </ul>
                <table id="socialMediaLinks">
                  <tbody>
                  <tr>
                    <td className="hvr-radial-out"><i className="fa fa-linkedin"></i></td>
                    <td className="hvr-radial-out"><i className="fa fa-github"></i></td>
                    <td className="hvr-radial-out"><i className="fa fa-facebook"></i></td>
                    <td className="hvr-radial-out"><i className="fa fa-twitter"></i></td>
                  </tr>
                  </tbody>
                </table>
            </div>
        )
    }

} //End of class SideNav
