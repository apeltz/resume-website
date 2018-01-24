import React from 'react';
import style from './index.less';

function ResumeEducation() {
	return (
		<div className={style.resEducation}>

			<div>
				<img src="./assets/logo_codesmith.jpg" />
				<p className={style.resTitle}>Codesmith - </p>
				<p className={style.resDesc}>Coding Bootcamp</p>
				<p className={style.resDate}>2016</p>
			</div>

			<div>
				<img src="./assets/logo_usc.jpg" />
				<p className={style.resTitle}>USC - </p>
				<p className={style.resDesc}>BSc. Business Admin, Finance</p>
				<p className={style.resDate}>2009</p>
			</div>

		</div>
	);

}

export default ResumeEducation;
