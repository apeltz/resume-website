import React from 'react';


export default class ResumeEducation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='res-education'>

        <p className='res-title'>
          <img src="./assets/logo_codesmith.jpg"/>
          Codesmith</p>
        <p className='res-desc'>Software Engineering Immersive</p>
        <p className='res-date'>2016</p>
        <br></br>

        <p className='res-title'>
          <img src="./assets/logo_ucla.png"/>
          UCLA Extension</p>
        <p className='res-desc'>Programming With Java</p>
        <p className='res-date'>2012</p>
        <br></br>

        <p className='res-title'>
          <img src="./assets/logo_usc.jpg"/>
          USC</p>
        <p className='res-desc'>BSc. Business Administration, Finance</p>
        <p className='res-date'>2009</p>

      </div>


    )
  }

} //End of class ResumeEducation
