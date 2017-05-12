import React from 'react';
import SideNavList from './side-nav-list.js';
import SocialMediaLinks from './social-media-links.js';
import style from './index.less';

function SideNav({ views, activeView, changeView }) {
	return (
		<div className={style.sidenav}>

			<div className={style.imgSection} >
				<h1 className={style.nameTitleBar}>AARON PELTZ</h1>
				<img className={style.profilePic} src="./assets/ap22.png" />
			</div>

			<SideNavList views={views} activeView={activeView} changeView={changeView} />

			<SocialMediaLinks />

		</div>
	);
}

export default SideNav;
