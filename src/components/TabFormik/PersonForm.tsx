import * as React from "react";
import { FormikProps, Field } from "formik";
import { withSubmitOnChange } from "./withSubmitOnChange";
import InputTextMaterial from "../FormikFields/InputTextMaterial";

interface IFormValues {
  name: string;
}

const PersonForm: React.FC<FormikProps<IFormValues>> = () => {
  return (
    <form>
      <Field label="Name" name="name" component={InputTextMaterial} />
    </form>
  );
};
export default withSubmitOnChange<IFormValues>(PersonForm);
