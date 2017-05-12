import React from 'react';
import style from './index.less';

function ResumeExperience() {
	return (
		<div id="res-projects">

			<div>
				<p className={style.resTitle}>Salem Partners, LLC</p>
				<p className={style.resDesc}>Associate, Investment Banking</p>
				<p className={style.resDate}>2011-2016</p>
			</div>
			<ul>
				<li>
					{`Advised on over 25 successfully closed sales and recapitalizations
					representing an aggregate transaction value of over $1 billion`}
				</li>
				<li>
					{`Aggregated 10,000+ data entries from RESTful API queries to SQL
					database to provide historical data set for creation of statistically
					driven VBA-based Monte Carlo simulation model for predicting performance
					of feature film portfolios`}
				</li>
			</ul>

			<div>
				<p className={style.resTitle}>Houlihan Lokey</p>
				<p className={style.resDesc}>Analyst, Investment Banking</p>
				<p className={style.resDate}>2010-2011</p>
			</div>
			<ul>
				<li>
					{`Authored over 60 globally distributed digital publications representing
					eight different industries`}
				</li>
				<li>
					{`Automated weekly collection of 5,000+ financial market data entries
						with VBA plugin and scripted SQL queries`}
				</li>
			</ul>

		</div>
	);
}

export default ResumeExperience;
