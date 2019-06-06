import * as React from "react";
import { AppBar, Paper, makeStyles, Tabs, Tab } from "@material-ui/core";
import TabBasicForm from "../components/TabBasicForm";
import TabFormik from "../components/TabFormik";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

const PersonPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = React.useCallback((event, newValue) => {
    setValue(newValue);
  }, []);
  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Formik" />
          <Tab label="Basic Form" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <Paper className={classes.paper}>
          <TabFormik />
        </Paper>
      )}
      {value === 1 && (
        <Paper className={classes.paper}>
          <TabBasicForm />
        </Paper>
      )}
    </>
  );
};

export default PersonPage;
