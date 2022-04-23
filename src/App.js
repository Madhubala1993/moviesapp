import { useContext, useState, createContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AddColor } from "./AddColor";
import "./index.css";
import { MoviesList } from "./MoviesList";
import Button from "@mui/material/Button";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { AddMovie } from "./AddMovie";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import Toolbar from "@mui/material/Toolbar";
import { ButtonBase } from "@mui/material";
import { Tictactoe } from "./Tictactoe";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { borderRadius } from "@mui/system";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { MovieDetails } from "./MovieDetails";
import TextField from "@mui/material/TextField";
import { EditMovie } from "./EditMovie";
import { BasicForm } from "./BasicForm";
import { Loginpage } from "./Loginpage";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [movieList, setMovieList] = useState([]);
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: "100vh", borderRadius: "0px" }} elevation={5}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies app
              </Button>
              <Button color="inherit" onClick={() => history.push("/films")}>
                Films
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/movies/add")}
              >
                Add Movie
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/colorgame")}
              >
                Color Game
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/tictactoe")}
              >
                Tic-Tac-Toe
              </Button>
              {/* <Button
                color="inherit"
                onClick={() => history.push("/basic-form")}
              >
                Basic Form
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/users/login")}
              >
                Login page
              </Button> */}
              <Button
                sx={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode == "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </Button>
            </Toolbar>
          </AppBar>

          <section className="router-container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/films">
                <Redirect to="/movies" />
              </Route>

              <Route exact path="/movies">
                <MoviesList />
              </Route>

              <Route path="/movies/add">
                <AddMovie />
              </Route>

              <Route path="/movie/edit/:id">
                <EditMovie />
              </Route>

              <Route path="/movie/:id">
                <MovieDetails />
              </Route>

              <Route path="/colorgame">
                <AddColor />
              </Route>

              <Route path="/tictactoe">
                <Tictactoe />
              </Route>

              {/* <Route path="/basic-form">
                <BasicForm />
              </Route>
              <Route path="/users/login">
                <Loginpage />
              </Route> */}

              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
