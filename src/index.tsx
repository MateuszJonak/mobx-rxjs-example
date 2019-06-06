import * as React from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/core";
import { AppContext, appStore } from "./store";
import PersonPage from "./pages/PersonPage";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <AppContext.Provider value={appStore}>
      <div className={classes.root}>
        <PersonPage />
      </div>
    </AppContext.Provider>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
