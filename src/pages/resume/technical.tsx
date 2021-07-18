import { Box, Typography } from "@material-ui/core";
import React from "react";
import LogoAWS from "../../assets/tech-logos/logo_aws.png";
import LogoChai from "../../assets/tech-logos/logo_chai.png";
import LogoCSS from "../../assets/tech-logos/logo_css.png";
import LogoEnzyme from "../../assets/tech-logos/logo_enzyme.png";
import LogoExpress from "../../assets/tech-logos/logo_express.png";
import LogoGit from "../../assets/tech-logos/logo_git.png";
import LogoGQL from "../../assets/tech-logos/logo_gql.png";
import LogoHTML from "../../assets/tech-logos/logo_html.png";
import LogoJest from "../../assets/tech-logos/logo_jest.png";
import LogoJS from "../../assets/tech-logos/logo_js.jpg";
import LogoJupyter from "../../assets/tech-logos/logo_jupyter.png";
import LogoMocha from "../../assets/tech-logos/logo_mocha.png";
import LogoNode from "../../assets/tech-logos/logo_node.png";
import LogoPandas from "../../assets/tech-logos/logo_pandas.png";
import LogoPreact from "../../assets/tech-logos/logo_preact.png";
import LogoPython from "../../assets/tech-logos/logo_python.png";
import LogoReact from "../../assets/tech-logos/logo_react.png";
import LogoRedux from "../../assets/tech-logos/logo_redux.png";
import LogoSelenium from "../../assets/tech-logos/logo_selenium.png";
import LogoSinon from "../../assets/tech-logos/logo_sinon.png";
import LogoSolidity from "../../assets/tech-logos/logo_solidity.png";
import LogoTruffle from "../../assets/tech-logos/logo_truffle.jpg";
import LogoTS from "../../assets/tech-logos/logo_ts.png";
import LogoWebpack from "../../assets/tech-logos/logo_webpack.png";

interface Skill {
  name: string;
  logo?: string;
}

const skills: Skill[] = [
  { name: "Javascript", logo: LogoJS },
  { name: "Typescript", logo: LogoTS },
  { name: "HTML", logo: LogoHTML },
  { name: "CSS", logo: LogoCSS },
  { name: "NodeJS", logo: LogoNode },
  { name: "React", logo: LogoReact },
  { name: "Preact", logo: LogoPreact },
  { name: "GraphQL", logo: LogoGQL },
  { name: "Redux", logo: LogoRedux },
  { name: "Webpack", logo: LogoWebpack },
  { name: "Git", logo: LogoGit },
  { name: "Express", logo: LogoExpress },
  { name: "Selenium", logo: LogoSelenium },
  { name: "Mocha", logo: LogoMocha },
  { name: "Chai", logo: LogoChai },
  { name: "Jest", logo: LogoJest },
  { name: "SinonJs", logo: LogoSinon },
  { name: "Enzyme", logo: LogoEnzyme },
  { name: "Solidity", logo: LogoSolidity },
  { name: "Truffle", logo: LogoTruffle },
  { name: "AWS", logo: LogoAWS },
  { name: "Pandas", logo: LogoPandas },
  { name: "Jupyter", logo: LogoJupyter },
  { name: "Python", logo: LogoPython },
];

export const TechnicalSkills: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      style={{ width: "100%" }}
    >
      {skills.map(({ name, logo }) => (
        <SkillComponent name={name} logo={logo} />
      ))}
    </Box>
  );
};

const SkillComponent: React.FC<Skill> = ({ name, logo }) => (
  <Box
    style={{ width: 80, height: 80 }}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="end"
  >
    {logo && (
      <img style={{ width: 40, marginBottom: 5 }} src={logo} alt="Logo" />
    )}
    <Typography>{name}</Typography>
  </Box>
);
