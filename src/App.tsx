import {
  AppBar,
  Box,
  Container,
  Grid,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import HomeIcon from "@material-ui/icons/Home";
import { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Link,
  LinkProps,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { About } from "./pages/about";
import { Resume } from "./pages/resume";
import { color1, theme } from "./theme";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: color1,
    padding: "1rem",
  },
  navLink: {
    color: "white",
    minWidth: "20px",
    textDecoration: "none",
    marginLeft: "1rem",
  },
}));

function App() {
  const { header } = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static" className={header}>
          <Box display="flex">
            <NavLink
              to="/"
              text="Home"
              icon={<HomeIcon style={{ fontSize: 25 }} />}
            />
            <NavLink
              to="/resume"
              text="Resume"
              icon={<DescriptionIcon style={{ fontSize: 22 }} />}
            />
          </Box>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container xs={12}>
            <Grid item xs={12} style={{ paddingTop: 30, paddingBottom: 30 }}>
              <Switch>
                <Route path="/home">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const NavLink: React.FC<{
  to: LinkProps["to"];
  text: string;
  icon: ReactElement;
}> = ({ to, text, icon }) => {
  const { navLink } = useStyles();
  return (
    <Link to={to} className={navLink}>
      <Box display="flex" alignItems="center">
        {icon}
        <Typography style={{ fontSize: 20, paddingTop: 3, marginLeft: 3 }}>
          {text}
        </Typography>
      </Box>
    </Link>
  );
};
