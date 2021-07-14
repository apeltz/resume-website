import {
  AppBar,
  Box,
  Container,
  createTheme,
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
import { Resume } from "./pages/resume";

const theme = createTheme({
  typography: {
    fontSize: 12,
    h3: {
      fontSize: 20,
    },
  },
});

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "royalblue",
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
        <Container
          maxWidth="lg"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Switch>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/">
                  <Redirect to="/resume" />
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
