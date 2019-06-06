import * as React from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "@material-ui/core";
import { AppContext } from "../../store";
import PersonFormFormik from "./PersonFormFormik";

const SecondForm = () => {
  const { person } = React.useContext(AppContext);

  return (
    <>
      <Typography>Saved name: {person.name}</Typography>
      <PersonFormFormik />
    </>
  );
};

export default observer(SecondForm);
