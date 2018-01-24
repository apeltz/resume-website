import React from 'react';
import TechnicalSkills from './resume-technical.js';
import ResumeExperience from './resume-experience.js';
import ResumeEducation from './resume-education.js';
import style from './index.less';

function Resume() {
	return (
		<div className={style.resume}>

			<h3>Technical Skills</h3>
			<TechnicalSkills />

			<h3>Experience</h3>
			<ResumeExperience />

			<h3>Education</h3>
			<ResumeEducation />

			<h3>Personal/Interests</h3>
			<p>
				{
					`Ocean kayaking, beach volleyball, pickup soccer, Texas hold’em,
					crossword puzzles, acoustic guitar, CodeWars, Project Euler, fantasy
					sports, video games, board games`
				}
			</p>
		</div>
	);
}

export default Resume;
