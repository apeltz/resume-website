import { Box, Link, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React, { ReactElement } from "react";
import bioPic from "../../assets/ap_avatar.jpg";
import { SectionTitle } from "../../components/section-title";

export const About: React.FC = () => {
  return (
    <Box>
      <img
        src={bioPic}
        alt="Profile"
        style={{
          maxWidth: 150,
          float: "left",
          marginRight: 30,
          marginBottom: 30,
          borderRadius: 10,
        }}
      />
      <SectionTitle text="About" />
      <Typography paragraph>
        I'm a software engineer dedicated to the creation of powerful and
        delightful web platforms. My experience to-date has been mostly in
        Javascript/Typescript, with an emphasis on font-end frameworks and
        libraries, Node.js, and the broader front-end ecosystem.
      </Typography>
      <SectionTitle text="Contact" />
      <Box display="flex">
        <ContactLink
          href="linkedin.com/in/apeltz/"
          icon={<LinkedInIcon />}
          text="LinkedIn"
        />
        <ContactLink
          href="github.com/apeltz"
          icon={<GitHubIcon />}
          text="Email"
        />
        <ContactLink
          href="mailto:aaron.peltz@gmail.com"
          icon={<EmailIcon />}
          text="Email"
        />
      </Box>
    </Box>
  );
};

const ContactLink: React.FC<{
  href: string;
  icon: ReactElement;
  text: string;
}> = ({ href, icon, text }) => (
  <Link href={href} target="_blank" rel="noreferrer">
    <Box
      display="flex"
      alignItems="center"
      style={{ margin: 5, marginRight: 30 }}
    >
      {icon}
      <Typography style={{ marginLeft: 10 }}>{text}</Typography>
    </Box>
  </Link>
);
