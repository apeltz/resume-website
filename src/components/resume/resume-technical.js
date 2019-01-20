import React from 'react';
import style from './index.less';

function TechnicalSkills() {
	let skills = {
		Javascript: './assets/logo_js.jpg',
		Typescript: './assets/logo_ts.png',
		'React / Preact': './assets/logo_reactpreact.png',
		GraphQL: './assets/logo_gql.png',
		NodeJS: './assets/logo_node.png',
		HTML: './assets/logo_html.png',
		CSS: './assets/logo_css.png',
		Git: './assets/logo_git.png',
		Webpack: './assets/logo_webpack.png',
		'Mocha / Chai': './assets/logo_mochachai.png',
		Jest: './assets/logo_jest.png',
		SinonJs: './assets/logo_sinon.png',
		Solidity: './assets/logo_solidity.png',
		Truffle: './assets/logo_truffle.jpg'
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
				<span>Javascript</span>
				<span>• Typescript</span>
				<span>• ReactJS</span>
				<span>• GraphQL</span>
				<span>• NodeJS</span>
				<span>• Git</span>
				<span>• HTML/CSS</span>
				<span>• Heroku</span>
				<span>• AWS</span>
				<span>• RESTful APIs</span>
				<span>• TDD (Mocha • Chai • Jest • Sinon)</span>
				<span>• Build Tools (Webpack • Browserify • Babel)</span>
			</p>
		</div>
	);
}

export default TechnicalSkills;
