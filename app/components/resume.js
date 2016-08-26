import React from 'react';


export default class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      background: 'yellow',
      width: '100%'
    }
    return (
      <div className='responsive-grid'>
        <div className='oneOfOne'><h3>Technical Skills</h3></div>
        <div className='oneOfMany'><p>Javascript</p></div>
        <div className='oneOfMany'><p>NodeJS</p></div>
        <div className='oneOfMany'><p>React</p></div>
        <div className='oneOfMany'><p>HTML</p></div>
      </div>


    )
  }

} //End of class Resume
