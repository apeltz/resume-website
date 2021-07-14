import { Typography } from "@material-ui/core";
import { ResumeEducation } from "./resume-education";
import { ResumeExperience } from "./resume-experience";
import { TechnicalSkills } from "./resume-technical";

export const Resume: React.FC = () => {
  return (
    <div>
      <SectionTitle text="Technical Skills" />
      <TechnicalSkills />

      <SectionTitle text="Experience" />
      <ResumeExperience />

      <SectionTitle text="Education" />
      <ResumeEducation />

      <SectionTitle text="Personal/Interests" />
      <p>
        {`Ocean kayaking, beach volleyball, pickup soccer, Texas hold’em,
					crossword puzzles, acoustic guitar, CodeWars, Project Euler, fantasy
					sports, video games, board games`}
      </p>
    </div>
  );
};

const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <>
    <Typography variant="h3" style={{ color: "DarkBlue" }}>
      {text}
    </Typography>
    <hr />
  </>
);
