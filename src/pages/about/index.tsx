import { Box, Typography } from "@material-ui/core";
import React from "react";
import bioPic from "../../assets/ap22.png";

export const About: React.FC = () => {
  return (
    <Box>
      <img
        src={bioPic}
        style={{ maxWidth: 150, float: "left", marginRight: 30 }}
      />
      <Typography paragraph>
        I'm a software engineer dedicated to the creation of powerful web
        platforms. My experience to-date has been mostly in Javascript, with an
        emphasis on font-end frameworks, Node.js, and supportive technologies.
      </Typography>
    </Box>
  );
};
