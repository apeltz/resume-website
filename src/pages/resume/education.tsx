import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";
import LogoCodesmith from "../../assets/logo_codesmith.jpg";
import LogoUdacity from "../../assets/logo_udacity.png";
import LogoUSC from "../../assets/logo_usc.jpg";

interface Education {
  place: string;
  what: string;
  date: string;
  logo: string;
}

const educations: Education[] = [
  {
    place: "Udacity",
    what: "Data Analyst Nanodegree",
    date: "2018",
    logo: LogoUdacity,
  },
  {
    place: "Codesmith",
    what: "Software Engineering Bootcamp",
    date: "2016",
    logo: LogoCodesmith,
  },
  {
    place: "University of Southern California",
    what: "Marshall School of Business",
    date: "2005-2009",
    logo: LogoUSC,
  },
];

export const ResumeEducation: React.FC = () => {
  return (
    <Box style={{ marginTop: 20, marginBottom: 20 }}>
      {educations.map((e) => (
        <EducationComponent {...e} />
      ))}
    </Box>
  );
};

const EducationComponent: React.FC<Education> = ({
  place,
  what,
  date,
  logo,
}) => (
  <Box display="flex" alignItems="center" style={{ marginTop: 5 }}>
    <Avatar src={logo} variant="square" style={{ width: 25, height: 25 }} />
    <Typography variant="h5" style={{ fontWeight: "bold", marginLeft: 10 }}>
      {place}
    </Typography>
    <Typography style={{ marginLeft: 5, marginRight: 5 }}>-</Typography>
    <Box display="flex" flexGrow={1}>
      <Typography variant="h5">{what}</Typography>
    </Box>
    <Box display="flex" justifyContent="end">
      <Typography variant="h5">{date}</Typography>
    </Box>
  </Box>
);
