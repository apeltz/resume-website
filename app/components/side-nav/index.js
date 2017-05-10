import React from 'react';
import SideNavList from './side-nav-list.js';
import SocialMediaLinks from './social-media-links.js';
import style from './index.less';

function SideNav({ views, activeView, changeView }) {
	return (
		<div id="sidenav">

			<div id='img-section'>
				<h1 id="nametitlebar">AARON PELTZ</h1>
				<img id="profilepic" src="./assets/ap22.png"></img>
			</div>

			<SideNavList views={views} activeView={activeView} changeView={changeView} />

			<SocialMediaLinks />

		</div>
	)
}

export default SideNav;
