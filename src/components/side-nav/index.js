import React from 'react';
import SideNavList from './side-nav-list.js';
import SocialMediaLinks from './social-media-links.js';
import style from './index.less';


function SideNav({ views, handleNavSelection }) {
	return (
		<div className={style.sideNav}>

			<div className={style.imgSection} >
				<h1 className={style.nameTitleBar}>AARON PELTZ</h1>
				<img className={style.profilePic} src="./assets/ap22.png" />
			</div>

			<SideNavList views={views} handleNavSelection={handleNavSelection} />

			<SocialMediaLinks />

		</div>
	);
}

export default SideNav;
