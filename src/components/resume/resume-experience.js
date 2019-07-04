import React from 'react';
import style from './index.less';

function ResumeExperience() {
	return (
		<div>
			<div className={style.resExperienceItem}>
				<div><img src="./assets/logo_twitch.png" /></div>
				<div className={style.resExperienceItemDetail}>
					<div>
						<p className={style.resTitle}>Twitch Interactive, Inc.</p>
						<p className={style.resDesc}>Senior Frontend Engineer</p>
						<p className={style.resDate}>2018-Present</p>
					</div>
					<ul>
						<li>
							{`Design, build, and maintain low-latency, reliable, scaled consumer-facing web applications and 
								internal developer framework tools and systems`}
						</li>
						<li>
							{`Plan, execute, and manage cross-team engineering projects with meaningful architectural 
								complexity and ambiguity`}
						</li>
						<li>
							{`Identify, implement, and evangelize development tools, patterns, and best practices`}
						</li>
					</ul>
				</div>
			</div>

			<div className={style.resExperienceItem}>
				<div><img src="./assets/logo_synacor.png" /></div>
				<div className={style.resExperienceItemDetail}>
					<div>
						<p className={style.resTitle}>Synacor, Inc.</p>
						<p className={style.resDesc}>Software Developer II</p>
						<p className={style.resDate}>2016-2018</p>
					</div>
					<ul>
						<li>
							{`Built high-volume, scalable web applications that delivered personalized
								news, information, and entertainment across desktop and mobile browsers`}
						</li>
						<li>
							{`Used modern frontend frameworks to create re-usable and customizable components as part
								of modular, component-based architecture`}
						</li>
						<li>
							{`Adhered to company’s strong code maintainability policy through combination
								of TDD and unit-based testing`}
						</li>
					</ul>
				</div>
			</div>

			<div className={style.resExperienceItem}>
				<div><img src="./assets/logo_ucode.png" /></div>
				<div className={style.resExperienceItemDetail}>
					<div>
						<p className={style.resTitle}>UCode, Inc.</p>
						<p className={style.resDesc}>Instructor</p>
						<p className={style.resDate}>2017-2018</p>
					</div>
					<ul>
						<li>
							{`Taught youth ages 6-18 front-end software development including HTML, CSS, Javascript with an emphasis on language
								fundamentals and personal project creation`}
						</li>
					</ul>
				</div>
			</div>

			<div className={style.resExperienceItem}>
				<div><img src="./assets/logo_salem.png" /></div>
				<div className={style.resExperienceItemDetail}>
					<div>
						<p className={style.resTitle}>Salem Partners, LLC</p>
						<p className={style.resDesc}>Associate, Investment Banking</p>
						<p className={style.resDate}>2011-2016</p>
					</div>
					<ul>
						<li>
							{`Executed full scope of firm advisory assignments with a primary focus
								on lower middle-market sell-side mergers & acquisitions`}
						</li>
						<li>
							{`Advised on over 25 successfully closed sales and recapitalizations
							representing an aggregate transaction value of over $1 billion`}
						</li>
					</ul>
				</div>
			</div>

			<div className={style.resExperienceItem}>
				<div><img src="./assets/logo_houlihan.jpeg" /></div>
				<div className={style.resExperienceItemDetail}>
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
			</div>

		</div>
	);
}

export default ResumeExperience;
