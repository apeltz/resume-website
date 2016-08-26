import React from 'react';
import SideNavList from './SideNavList';
import SocialMediaLinks from './SocialMediaLinks';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sidebar">
                <h1 id="nametitlebar">AARON PELTZ</h1>
                <img id="profilepic" src="./assets/placeholderheadshot.png"></img>
                <SideNavList
                 mobile={this.props.mobile}
                 changeView={this.props.changeView} views={this.props.views}/>
                <SocialMediaLinks />
            </div>
        )
    }

} //End of class SideNav
