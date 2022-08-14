import axios from 'axios';
import { Formik, Field, FormikProps, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import { PaperLayout } from "../../../components";
import { API_PATHS } from "../../../constants/apiPaths";
import {
  Product,
  ProductSchema,
} from "../../../models/Product";

const Form = (props: FormikProps<FormikValues>) => {
  const {
    // values,
    // touched,
    // errors,
    dirty,
    isSubmitting,
    isValid,
    // handleChange,
    // handleBlur,
    handleSubmit,
    // handleReset,
    // setFieldValue,
    // isEditMode,
    // onCancel,
    // isButtonContact,
    // setTouched,
    // isButtonAddAndRedirect,
    // setShouldRedirect,
    // submitForm,
    // onGetCitizen,
    // shouldConfirmLeave,
  } = props;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name="title"
            label="Title"
            fullWidth
            autoComplete="off"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name="description"
            label="Description"
            fullWidth
            autoComplete="off"
            multiline
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            component={TextField}
            name="price"
            label="Price ($)"
            fullWidth
            autoComplete="off"
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            component={TextField}
            name="count"
            label="Count"
            fullWidth
            autoComplete="off"
            required
          />
        </Grid>
        <Grid item container xs={12} justify="space-between">
          <Button
            color="primary"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!dirty || isSubmitting || !isValid}
          >
            Save Product
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

const emptyValues: any = ProductSchema.cast();

export default function PageProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onSubmit = (values: FormikValues) => {
    const formattedValues = ProductSchema.cast(values);
    const productToSave = id ? {...ProductSchema.cast(formattedValues), id} : formattedValues;
    (
      id 
        ? axios.put(`${API_PATHS.bff}/products/${id}`, productToSave)
        : axios.post(`${API_PATHS.bff}/products`, productToSave)
    )
      .then(() => navigate('/admin/products'));
  };

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }
    axios.get(`${API_PATHS.bff}/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(() => navigate('/admin/products')) // TODO: add error handler
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <PaperLayout>
      <Typography component="h1" variant="h4" align="center">
        {id ? 'Edit product' : 'Create new product'}
      </Typography>
      <Formik
        initialValues={product || emptyValues}
        validationSchema={ProductSchema}
        onSubmit={onSubmit}
      >
        {(props: FormikProps<FormikValues>) => <Form {...props} />}
      </Formik>
    </PaperLayout>
  );
}
