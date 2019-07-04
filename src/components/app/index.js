import React, { Component } from 'react';
import SideNav from '../side-nav';
import About from '../about';
import Resume from '../resume';
import Contact from '../contact';
import style from './index.less';


class App extends Component {

	handleNavSelection = (e) => {
		e.preventDefault();
		let activeView = e.currentTarget.dataset.section;
		let content = e.currentTarget.getElementsByTagName('div')[1];
		console.log('CONTENT: ', content);
		content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
		this.setState({ activeView });
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
			<div className={style.outer_wrapper} >
				<div className={style.inner_wrapper}>
					<SideNav views={this.views} handleNavSelection={this.handleNavSelection} />
					<div className={style.largeContent} >
						<h2 className={style.sectionTitle}>{this.state.activeView}</h2>
						{this.views[this.state.activeView]}
					</div>
				</div>
			</div>
		);
	}
}


export default App;
