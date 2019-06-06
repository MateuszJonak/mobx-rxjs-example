import * as React from "react";
import { Formik } from "formik";
import PersonForm from "./PersonForm";
import { AppContext } from "../../store";

const FormikForm = () => {
  const { person } = React.useContext(AppContext);
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        person.setName(values.name);
        actions.setSubmitting(false);
      }}
      component={PersonForm}
    />
  );
};

export default FormikForm;
