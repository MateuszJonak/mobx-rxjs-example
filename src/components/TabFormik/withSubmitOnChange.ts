import * as React from "react";
import { useAsObservableSource } from "mobx-react-lite";
import { FormikProps } from "formik";
import { toStream } from "mobx-utils";
import { toJS } from "mobx";
import { from } from "rxjs";
import { debounceTime } from "rxjs/operators";

export const withSubmitOnChange = <T>(
  Component: React.ComponentType<FormikProps<T>>
) => (props: FormikProps<T>) => {
  const observableValues = useAsObservableSource(props.values);
  React.useEffect(() => {
    const $input = from(toStream(() => toJS(observableValues))).pipe(
      debounceTime(500)
    );
    const subscription = $input.subscribe(() => {
      props.handleSubmit();
    });

    return () => subscription.unsubscribe();
  }, []);

  return React.createElement(Component, props);
};
