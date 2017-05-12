import React from 'react';
import style from './index.less';

function TechnicalSkills() {
	let skills = {
		Javascript: './assets/logo_js.jpg',
		NodeJS: './assets/logo_node.png',
		HTML: './assets/logo_html.png',
		CSS: './assets/logo_css.png'
	};
	let skillsToDOM = Object.keys(skills).map((s, i) => (
		<div key={'skill-'+i} className={style.skillLogo}>
			<img src={skills[s]} />
			<p>{s}</p>
		</div>
	));
	return (
		<div className={style.resSkills}>
			{skillsToDOM}
			<p>
				{`Javascript, ReactJS, NodeJS, Git, HTML/CSS, Heroku, AWS, RESTful APIs,
				TDD (Expect, Mocha, Chai, Sinon), build tools (Webpack, Browserify, Babel)`}
			</p>
		</div>
	);
}

export default TechnicalSkills;
