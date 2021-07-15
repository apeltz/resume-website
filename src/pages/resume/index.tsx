import { Box, Typography } from "@material-ui/core";
import { ResumeEducation } from "./education";
import { ResumeExperience } from "./experience";
import { Personal } from "./personal";
import { TechnicalSkills } from "./technical";

export const Resume: React.FC = () => {
  return (
    <Box>
      <SectionTitle text="Technical Skills" />
      <TechnicalSkills />

      <SectionTitle text="Experience" />
      <ResumeExperience />

      <SectionTitle text="Education" />
      <ResumeEducation />

      <SectionTitle text="Personal/Interests" />
      <Personal />
    </Box>
  );
};

const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <>
    <Typography variant="h3" style={{ marginTop: 30 }}>
      {text}
    </Typography>
    <hr />
  </>
);
