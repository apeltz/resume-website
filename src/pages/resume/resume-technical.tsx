import React from 'react';


export const TechnicalSkills: React.FC = () => {

    let skills: Record<string, string> = {
      Javascript: "%PUBLIC_URL%/logo192.png",
      NodeJS: "%PUBLIC_URL%/logo192.png",
      HTML: "%PUBLIC_URL%/logo192.png",
      CSS: "%PUBLIC_URL%/logo192.png",
    };
    let skillsToDOM = Object.keys(skills).map((s, i) => (
        <div
          key={'skill-'+i}
          className='skill-logo'
        >
          <img src={skills[s]} alt={`${s} logo`}/>
          <p>{s}</p>
        </div>
    ));

    return (
      <div id='res-skills'>
        {skillsToDOM}
        <p>Javascript, ES6, ReactJS, Redux, AngularJS, PostgreSQL, NodeJS, Express, Git, HTML/CSS, jQuery, Heroku, AWS, RESTful APIs, MongoDB, Bootstrap, TDD (Expect, Mocha, Chai, Sinon), build tools (Browserify, Babel), Python, Django</p>
      </div>
    )

}
