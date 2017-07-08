import React from 'react';
import style from './index.less';

function SideNavList({ views, handleNavSelection }) {

	function createListItems() {
		const listItems = {
			// key -> section title, value -> className for FontAwesome icon
			About: 'fa fa-user',
			Resume: 'fa fa-file-text',
			Contact: 'fa fa-envelope'
		};
		return Object.keys(listItems).map((sectionTitle, i) => (
			// let isActive = sectionTitle === activeView;
			<li
				className={style.sideNavListItem}
				key={'sidenav-list-item-'+i}
				onClick={handleNavSelection}
				data-section={sectionTitle}
			>
				<div className={[style.sectionHeader, style.hvrBounceToRight].join(' ')}>
					<i className={listItems[sectionTitle]} />
					<span>{sectionTitle}</span>
				</div>
				<div className={style.sideNavContent}>
					{views[sectionTitle]}
				</div>
			</li>
		));
	}

	return (
		<ul className={style.sideNavList} >
		{ createListItems() }
		</ul>
	);

} //End of class SideNavList

export default SideNavList;
