import React from 'react';


export default class ResumeExperience extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='res-projects'>

        <div className='res-subhead'>
        <p className='res-title'>Salem Partners, LLC</p>
        <p className='res-desc'>Associate, Investment Banking</p>
        <p className='res-date'>2011-2016</p>
        </div>
        <ul>
          <li>Advised on over 25 successfully closed sales and recapitalizations representing an aggregate transaction value of over $1 billion
          </li>
          <li>Aggregated 10,000+ data entries from RESTful API queries to SQL database to provide historical data set for creation of statistically driven VBA-based Monte Carlo simulation model for predicting performance of feature film portfolios</li>
          <li>Introduced user analytics to firm website to validate proposed redesign; rebuilt website with HTML/CSS to improve UE and optimize based on data collected in testing</li>
        </ul>


        <div className='res-subhead'>
        <p className='res-title'>Houlihan Lokey</p>
        <p className='res-desc'>Analyst, Investment Banking</p>
        <p className='res-date'>2010-2011</p>
        </div>
        <ul>
          <li>Authored over 60 globally distributed digital publications representing eight different industries
          </li>
          <li>Automated weekly collection of 5,000+ financial market data entries with VBA plugin and scripted SQL queries</li>
        </ul>

      </div>


    )
  }

} //End of class ResumeExperience
