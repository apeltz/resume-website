import React from 'react';
import PortfolioCards from './portfoliocards';

export default class Portfolio extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <PortfolioCards />
      </div>


    )
  }

} //End of class Portfolio
