import React from 'react';
import SideNav from '../side-nav';
import About from '../about';
import Resume from '../resume';
import Contact from '../contact';
import style from './index.less';

class App extends React.Component {

	changeView(e) {
		let sectionNode = e.target.closest('li');
		let activeView = sectionNode.dataset.section;
		let sideNavContent = sectionNode.getElementsByClassName('sideNavContent')[0];
		sideNavContent.classList.toggle('hidden');
		if (activeView !== this.state.activeView) {
			let classes = ['animated', 'fadeIn'];
			classes.map(c => document.getElementById('large-content').classList.remove(c));
			this.setState({ activeView });
			setTimeout(() => {
				classes.map(c => document.getElementById('large-content').classList.add(c));
			},0);
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			activeView: 'Resume'
		};
		this.views = {
			About: <About />,
			Resume: <Resume />,
			Contact: <Contact />
		};
	}

	render() {
		return (
			<div className={style.wrapper}>
				<SideNav views={this.views} activeView={this.state.activeView} changeView={this.changeView} />
				<div className={style.largeContent} >
					<h2 className={style.sectionTitle}>{this.state.activeView}</h2>
					{this.views[this.state.activeView]}
				</div>
			</div>
		);
	}
}


export default App;
