import React from 'react';
import TechnicalSkills from './resumetechnical.js'
import ResumeExperience from './resumeexperience.js'
import ResumeProjects from './resumeprojects.js'
import ResumeEducation from './resumeeducation.js'


export default class Resume extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='resume'>
        <h3>Technical Skills</h3>
        <TechnicalSkills />
        <h3>Experience</h3>
        <ResumeExperience />
        <h3>Projects</h3>
        <ResumeProjects />
        <h3>Education</h3>
        <ResumeEducation />
        <h3>Personal/Interests</h3>
        <p>Ocean kayaking, beach volleyball, pickup soccer, Texas hold’em, crossword puzzles, acoustic guitar, CodeWars, Project Euler, fantasy sports, video games, board games</p>
        </div>
    )
  }

} //End of class Resume
