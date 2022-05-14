import React from 'react';
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  Field,
  Form,
  Formik,
  FormikProps,
  FormikValues,
} from "formik";

import {ProductSchema} from "models/Product";

type AddressFormProps = {
  initialValues: object,
  onChange: any
};

export function AddressForm({initialValues, onChange}:AddressFormProps) {
  return (
    <React.Fragment>

      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={() => undefined}
      >
        {(props: FormikProps<FormikValues>) => <Form {...props} onChange={onChange} />}
      </Formik>
    </React.Fragment>
  );
}
