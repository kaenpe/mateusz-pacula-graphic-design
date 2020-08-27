import { Button, InputLabel, MenuItem } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { useTheme } from '@material-ui/core/styles';
import { Field, Formik } from 'formik';
import { Select, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledForm, StyledFormWrapper } from '../Auth/AuthForm';
import ProgressBar from '../UI/ProgressBar';

//styled
const StyledFormControl = styled(FormControl)`
  && {
    margin: ${({ theme }) => theme.spacing(2)};
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

const StyledButton = styled(Button)`
  max-width: 120px;
  align-self: center;
  justify-self: center;
  height: 30px;
`;
//
const AddFileForm = () => {
  //consts
  const theme = useTheme();

  //
  //states//
  const [file, setFile] = useState(null);
  //functions//

  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];
    setFile(selected);
    return console.log(file);
  };
  //effects//
  return (
    <StyledFormWrapper>
      <h1>Dodaj zdjęcie</h1>

      <Formik
        initialValues={{ title: '', category: '' }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({ isSubmitting, values: { title, category } }) => (
          <>
            {isSubmitting && (
              <ProgressBar
                category={category}
                title={title}
                file={file}
                setFile={setFile}
              ></ProgressBar>
            )}
            <StyledForm>
              <Field
                type='Tytuł'
                name='title'
                component={TextField}
                variant='outlined'
                color='primary'
              />
              <StyledFormControl variant='outlined' theme={theme}>
                <InputLabel>Kategoria</InputLabel>
                <Field component={Select} name='category'>
                  <MenuItem value={'banery'}>banery</MenuItem>
                  <MenuItem value={'before after'}>before after</MenuItem>
                  <MenuItem value={'miniatury'}>miniatury</MenuItem>
                  <MenuItem value={'tapety'}>tapety</MenuItem>
                  <MenuItem value={'photoshop'}>photoshop</MenuItem>
                </Field>
              </StyledFormControl>
              <input
                id='file-upload'
                type='file'
                onChange={fileChangeHandler}
              />
              ;
              <StyledButton
                color='primary'
                variant='contained'
                type='submit'
                disabled={isSubmitting}
              >
                DODAJ
              </StyledButton>
            </StyledForm>
          </>
        )}
      </Formik>
    </StyledFormWrapper>
  );
};

export default AddFileForm;
