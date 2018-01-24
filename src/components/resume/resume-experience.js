import React from 'react';
import style from './index.less';

function ResumeExperience() {
	return (
		<div className={style.resExperience}>

			<div>
				<p className={style.resTitle}>Synacor, Inc.</p>
				<p className={style.resDesc}>Software Developer II</p>
				<p className={style.resDate}>2016-Present</p>
			</div>
			<ul>
				<li>
					{`Build high-volume, scalable web applications that deliver personalized
						news, information, and entertainment across desktop and mobile browsers`}
				</li>
				<li>
					{`Use PreactJS to create re-usable and customizable components as part
						of modular, component-based architecture`}
				</li>
				<li>
					{`Adhere to company’s strong code maintainability policy through combination
						of TDD and unit-based testing`}
				</li>
				<li>
					{`Acting subject-matter-expert for platform’s ‘My Portfolio’ vertical
						delivering users financial holdings information and performance metrics
						for user-created, customizable stock portfolios`}
				</li>
			</ul>

			<div>
				<p className={style.resTitle}>Salem Partners, LLC</p>
				<p className={style.resDesc}>Associate, Investment Banking</p>
				<p className={style.resDate}>2011-2016</p>
			</div>
			<ul>
				<li>
					{`Execute full scope of firm advisory assignments with a primary focus
						on lower middle-market sell-side mergers & acquisitions`}
				</li>
				<li>
					{`Advised on over 25 successfully closed sales and recapitalizations
					representing an aggregate transaction value of over $1 billion`}
				</li>
			</ul>

			<div>
				<p className={style.resTitle}>Houlihan Lokey</p>
				<p className={style.resDesc}>Analyst, Investment Banking</p>
				<p className={style.resDate}>2010-2011</p>
			</div>
			<ul>
				<li>
					{`Authored 60+ globally distributed digital publications representing
					eight different industries`}
				</li>
				<li>
					{`Collected, analyzed, and presented industry and company financial
						data for publication in globally distributed periodicals`}
				</li>
			</ul>

		</div>
	);
}

export default ResumeExperience;
