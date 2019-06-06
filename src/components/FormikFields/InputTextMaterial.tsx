import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import { Omit } from "../../types";

const InputTextMaterial: React.SFC<
  FieldProps & Omit<StandardTextFieldProps, "error" | "helperText">
> = ({ field, form: { touched, errors }, inputProps, ...props }) => {
  const isError = !!touched[field.name] && !!errors[field.name];

  return (
    <TextField
      type="text"
      error={isError}
      inputProps={{
        ...field,
        ...inputProps
      }}
      helperText={isError ? errors[field.name] : null}
      {...props}
    />
  );
};

export default InputTextMaterial;
