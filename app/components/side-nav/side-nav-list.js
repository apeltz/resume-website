import React from 'react';
import style from './index.less';

function SideNavList({ views, activeView, changeView}) {

	const listItems = {
		// key -> section title, value -> className for FontAwesome icon
		About: "fa fa-user",
		Resume: 'fa fa-file-text',
		Contact: 'fa fa-envelope'
	}
	console.log('STYLE: ', style)
	let listItemsToDOM = Object.keys(listItems).map((sectionTitle, i) => {
		let isActive = sectionTitle === activeView;
		return (
			<li
				className='sidenav-li'
				key={'sidenav-list-item-'+i}
				onClick={changeView}
				data-section={sectionTitle}
			>
				<div className="sectionHeader hvr-bounce-to-right" style={style.activeNav}>
					<i className={listItems[sectionTitle]}></i>
					<span>{sectionTitle}</span>
				</div>
				<div className={'sideNavContent' + ' hidden'}>
					{views[sectionTitle]}
				</div>
			</li>
		)
	});

	return (
		<ul className='sidenav-ul'>
			{listItemsToDOM}
		</ul>
	)

} //End of class SideNavList

export default SideNavList;
