import { Box, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CasinoIcon from "@material-ui/icons/Casino";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import RowingIcon from "@material-ui/icons/Rowing";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsFootballIcon from "@material-ui/icons/SportsFootball";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";
import { ReactElement } from "react";

export const Personal: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      style={{ width: "100%" }}
    >
      <PersonalItem text="Pickup soccer" icon={<SportsSoccerIcon />} />
      <PersonalItem text="Board games" icon={<CasinoIcon />} />
      <PersonalItem text="Video games" icon={<SportsEsportsIcon />} />
      <PersonalItem text="Ocean kayaking" icon={<RowingIcon />} />
      <PersonalItem text="Fantasy sports" icon={<SportsFootballIcon />} />
      <PersonalItem text="Beach volleyball" icon={<SportsVolleyballIcon />} />
      <PersonalItem text="Texas Hold'em" icon={<FavoriteIcon />} />
      <PersonalItem text="Crossword puzzles" icon={<SpellcheckIcon />} />
      <PersonalItem text="Acoustic guitar" icon={<MusicNoteIcon />} />
    </Box>
  );
};

const PersonalItem: React.FC<{ text: string; icon: ReactElement }> = ({
  text,
  icon,
}) => (
  <Box display="flex">
    <ListItem
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <ListItemIcon style={{ minWidth: 30 }}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </Box>
);
