import React from 'react';

function SideNavList({ views, activeView, changeView }) {

	const listItems = {
		// key -> section title, value -> className for FontAwesome icon
		About: 'fa fa-user',
		Resume: 'fa fa-file-text',
		Contact: 'fa fa-envelope'
	};
	let listItemsToDOM = Object.keys(listItems).map((sectionTitle, i) => (
		// let isActive = sectionTitle === activeView;
		<li
			className="sidenav-li"
			key={'sidenav-list-item-'+i}
			onClick={changeView}
			data-section={sectionTitle}
		>
			<div className="sectionHeader hvr-bounce-to-right" >
				<i className={listItems[sectionTitle]} />
				<span>{sectionTitle}</span>
			</div>
			<div className={'sideNavContent'}>
				{views[sectionTitle]}
			</div>
		</li>
	));

	return (
		<ul className="sidenav-ul">
			{listItemsToDOM}
		</ul>
	);

} //End of class SideNavList

export default SideNavList;
