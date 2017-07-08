import React, { Component } from 'react';
import SideNav from '../side-nav';
import About from '../about';
import Resume from '../resume';
import Contact from '../contact';
import style from './index.less';


class App extends Component {

	handleNavSelection = (e) => {
		let activeView = e.currentTarget.dataset.section;
		let content = e.currentTarget.getElementsByTagName('div')[1];
		content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
		this.setState({ activeView });
	}

	changeView = (e) => {
		let sectionNode = e.target.closest('li');
		let activeView = sectionNode.dataset.section;
		let sideNavContent = sectionNode.getElementsByClassName('src-components-side-nav-index__sideNavContent')[0];
		sideNavContent.classList.toggle('hidden');
		if (activeView !== this.state.activeView) {
			let classes = ['animated', 'fadeIn'];
			classes.map(c => document.getElementById('src-components-app-index__largeContent').classList.remove(c));
			this.setState({ activeView });
			setTimeout(() => {
				classes.map(c => document.getElementById('src-components-app-index__largeContent').classList.add(c));
			},0);
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			activeView: 'About'
		};
		this.views = {
			About: <About />,
			Resume: <Resume />,
			Contact: <Contact />
		};
	}

	render() {
		return (
			<div className={style.wrapper} >
				<SideNav views={this.views} handleNavSelection={this.handleNavSelection} />
				<div className={style.largeContent} >
					<h2 className={style.sectionTitle}>{this.state.activeView}</h2>
					{this.views[this.state.activeView]}
				</div>
			</div>
		);
	}
}


export default App;
