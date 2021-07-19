import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import IconDot from "@material-ui/icons/FiberManualRecord";
import React from "react";
import LogoHoulihan from "../../assets/logo_houlihan.png";
import LogoSalem from "../../assets/logo_salem.png";
import LogoSynacor from "../../assets/logo_synacor.png";
import LogoTwitch from "../../assets/logo_twitch.png";
import LogoUcode from "../../assets/logo_ucode.png";
import { color1, color4 } from "../../theme";

interface Experience {
  company: string;
  role: string;
  date: string;
  logo: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    company: "Twitch Interactive, Inc.",
    role: "Senior Frontend Enginer (SDEII)",
    date: "2018 - Present",
    logo: LogoTwitch,
    bullets: [
      `Design, build, and maintain low-latency, reliable, scaled consumer-facing web applications and internal developer framework tools and systems`,
      `Plan, execute, and manage cross-team engineering projects with meaningful architectural complexity and ambiguity`,
      `Identify, implement, and evangelize development tools, patterns, and best practices`,
    ],
  },
  {
    company: "Synacor, Inc.",
    role: "Software Developer II",
    date: "2016 - 2018",
    logo: LogoSynacor,
    bullets: [
      `Built high-volume, scalable web applications that delivered personalized news, information, and entertainment across desktop and mobile browsers`,
      `Used modern frontend frameworks to create reusable and customizable components as part of modular, component-based architecture`,
    ],
  },
  {
    company: "UCode, Inc",
    role: "Instructor",
    date: "2017 - 2018",
    logo: LogoUcode,
    bullets: [
      `Taught youth ages 6-18 front-end software development including HTML, CSS, Javascript with an emphasis on language fundamentals and personal project creation`,
    ],
  },
  {
    company: "Salem Partners, LLC",
    role: "Associate, Investment Banking",
    date: "2011 - 2016",
    logo: LogoSalem,
    bullets: [
      `Executed full scope of firm advisory assignments with a primary focus on lower middle-market sell-side mergers & acquisitions`,
      `Advised on over 25 successfully closed sales and recapitalizations representing an aggregate transaction value of over $1 billion`,
    ],
  },
  {
    company: "Houlihan Lokey",
    role: "Analyst, Investment Banking",
    date: "2010 - 2011",
    logo: LogoHoulihan,
    bullets: [
      `Authored 60+ globally distributed digital publications representing eight different industries`,
      `Collected, analyzed, and presented industry and company financial data for publication in globally distributed periodicals`,
    ],
  },
];

export const ResumeExperience: React.FC = () => {
  return (
    <div>
      {experiences.map((e) => (
        <ExperienceComponent {...e} />
      ))}
    </div>
  );
};

const ExperienceComponent: React.FC<Experience> = ({
  company,
  role,
  date,
  logo,
  bullets,
}) => (
  <>
    <Box>
      <Box display="flex" alignItems="center">
        <Avatar src={logo} variant="square" style={{ width: 30, height: 30 }} />
        <Box
          style={{ backgroundColor: color4, padding: 5, marginLeft: 5 }}
          display="flex"
          alignItems="center"
          flexGrow={1}
        >
          <Typography
            variant="h5"
            style={{ color: color1, fontWeight: "bold", marginLeft: 5 }}
          >
            {company}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="end" style={{ marginTop: 10 }}>
        <Box display="flex" alignItems="end" flexGrow={1}>
          <Typography variant="h5" style={{ fontStyle: "italic" }}>
            {role}
          </Typography>
        </Box>
        <Box display="flex" alignItems="end" justifyContent="end">
          <Typography variant="h5">{date}</Typography>
        </Box>
      </Box>
      <List
        style={{
          marginTop: 10,
          marginBottom: 10,
          padding: 0,
        }}
      >
        {bullets.map((b) => (
          <ListItem
            style={{ padding: 0, paddingLeft: 10, marginTop: 10 }}
            alignItems="flex-start"
          >
            <ListItemIcon style={{ minWidth: 15 }}>
              <IconDot style={{ fontSize: 10 }} />
            </ListItemIcon>
            <ListItemText
              primary={b}
              style={{
                marginLeft: 5,
                marginTop: 0,
                marginBottom: 0,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  </>
);
