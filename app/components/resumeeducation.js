import React from 'react';


export default class ResumeEducation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='res-education'>
        <img src="./assets/logo_codesmith.jpg"/>
        <p className='res-title'>Codesmith - </p>
        <p className='res-desc'>Software Engineering Immersive</p>
        <p className='res-date'>2016</p>
        <br></br>
        <img src="./assets/logo_ucla.png"/>
        <p className='res-title'>UCLA Extension - </p>
        <p className='res-desc'>Programming With Java</p>
        <p className='res-date'>2012</p>
        <br></br>
        <img src="./assets/logo_usc.jpg"/>
        <p className='res-title'>USC - </p>
        <p className='res-desc'>BSc. Business Administration, Finance</p>
        <p className='res-date'>2009</p>

      </div>


    )
  }

} //End of class ResumeEducation
