import {TechnicalSkills} from './resume-technical';
import {ResumeExperience} from './resume-experience';
import {ResumeEducation} from './resume-education';

export const Resume: React.FC = () => {
	return (
		<div >

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

