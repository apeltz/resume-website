import React from 'react';
import style from './index.less';

function ResumeEducation() {
	return (
		<div className={style.resEducation}>

		<p className={style.resTitle}>
		<img src="./assets/logo_codesmith.jpg" />
		Codesmith</p>
		<p className={style.resDesc}>Software Engineering Immersive</p>
		<p className={style.restDate}>2016</p>
		<br />

		<p className={style.resTitle}>
		<img src="./assets/logo_ucla.png" />
		UCLA Extension</p>
		<p className={style.resDesc}>Programming With Java</p>
		<p className={style.restDate}>2012</p>
		<br />

		<p className={style.resTitle}>
		<img src="./assets/logo_usc.jpg" />
		USC</p>
		<p className={style.resDesc}>BSc. Business Administration, Finance</p>
		<p className={style.restDate}>2009</p>
		</div>
	);

}

export default ResumeEducation;
