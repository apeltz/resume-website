import React from 'react';
import { Resume } from './pages/resume'
import avatar from './assets/ap_avatar.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Avatar, Box, Icon, Grid, Container, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(() => ({
  header: {
     backgroundColor: "royalblue",
     padding: '1rem',
  },
  navLink: {
    color: 'white',
    minWidth: '20px',
    textDecoration: 'none',
  }
}));

function App() {
  const { header, navLink } = useStyles();
  return (
    
      <Router>
        <Container maxWidth="lg">

        <Grid container xs={12} >
    <Grid item xs={12}>

        <AppBar position="static" className={header}>


          <Link to="/resume" className={navLink}   >                 
          <Box display="flex" alignItems='center'>
                      <DescriptionIcon fontSize="large" />
                      <Typography style={{ fontSize: 25}}>Resume</Typography>

          </Box>
                      </Link>

        </AppBar>


        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Resume />
          </Route>
        </Switch>
    </Grid>

        </Grid>
        </Container>
    </Router>
  );
}

export default App;

