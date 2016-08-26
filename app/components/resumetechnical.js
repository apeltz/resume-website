import React from 'react';


export default class TechnicalSkills extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let skills = {
      Javascript: "./assets/logo_js.jpg",
      NodeJS: "./assets/logo_js.jpg",
      HTML: "./assets/logo_js.jpg",
      CSS: "./assets/logo_js.jpg",
    }
    let skillsToDOM = Object.keys(skills).map((s, i) => {
      return (
        <div
          key={'skill-'+i}
          className='skill-logo'
        >
          <img src={skills[s]} />
          <p>{s}</p>
        </div>
      )
    });
    return (
      <div id='res-skills'>
        {skillsToDOM}
        <p>Javascript, ES6, ReactJS, Redux, AngularJS, PostgreSQL, NodeJS, Express, Git, HTML/CSS, jQuery, Heroku, AWS, RESTful APIs, MongoDB, Bootstrap, TDD (Expect, Mocha, Chai, Sinon), build tools (Browserify, Babel), Python, Django</p>
      </div>
    )
  }

} //End of class TechnicalSkills
