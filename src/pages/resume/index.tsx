import { Box } from "@material-ui/core";
import { SectionTitle } from "../../components/section-title";
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
