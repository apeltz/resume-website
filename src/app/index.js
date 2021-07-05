import React, { Component } from "react";
import SideNav from "../components/side-nav";
import About from "../components/about";
import Resume from "../components/resume";
import Contact from "../components/contact";
import style from "./index.less";

export class App extends Component {
	handleNavSelection = (e) => {
		e.preventDefault();
		let activeView = e.currentTarget.dataset.section;
		let content = e.currentTarget.getElementsByTagName("div")[1];
		content.style.maxHeight = content.style.maxHeight
			? null
			: content.scrollHeight + "px";
		this.setState({ activeView });
	};

	constructor(props) {
		super(props);
		this.state = {
			activeView: "About",
		};
		this.views = {
			About: <About />,
			Resume: <Resume />,
			Contact: <Contact />,
		};
		console.log("hello");
	}

	render() {
		console.log("hey jude 2");
		return (
			<div className={style.outer_wrapper}>
				<div className={style.inner_wrapper}>
					<SideNav
						views={this.views}
						handleNavSelection={this.handleNavSelection}
					/>
					<div className={style.largeContent}>
						<h2 className={style.sectionTitle}>{this.state.activeView}</h2>
						{this.views[this.state.activeView]}
					</div>
				</div>
			</div>
		);
	}
}
