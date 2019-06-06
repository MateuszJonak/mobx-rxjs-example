import * as React from "react";
import { observer } from "mobx-react-lite";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { TextField, Typography } from "@material-ui/core";
import { AppContext } from "../store";

const Form = () => {
  const { person } = React.useContext(AppContext);
  const inputRef = React.useRef();

  React.useEffect(() => {
    const $input = fromEvent(inputRef.current, "keyup").pipe(debounceTime(500));
    const subscription = $input.subscribe(
      (value: React.ChangeEvent<HTMLInputElement>) => {
        person.setName(value.target.value);
      }
    );

    return () => subscription.unsubscribe();
  }, [person]);

  return (
    <>
      <Typography>Saved name: {person.name}</Typography>
      <form>
        <TextField
          ref={inputRef}
          label="Name"
          placeholder="Type your name..."
          margin="normal"
        />
      </form>
    </>
  );
};

export default observer(Form);
