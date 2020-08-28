import { Button, InputLabel, MenuItem, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { fade, useTheme } from '@material-ui/core/styles';
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
const StyledFileName = styled(Typography)`
  text-align: center;
`;
const StyledImageUpload = styled.label`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 40;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  font-weight: bold;
  margin: 5px;
  input {
    display: none;
  }
  &:hover {
    background-color: ${({ theme }) => fade(theme.palette.primary.main, 0.15)};
  }
`;
//
const AddFileForm = () => {
  //consts
  const theme = useTheme();
  const types = ['image/png', 'image/jpeg', 'image/svg'];
  //
  //states//
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  //functions//

  const fileChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      {
        error && setError(null);
      }
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file');
    }
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
            setFile(null);
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
                placeholder='tytuł'
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
              <StyledFileName>{file && file.name}</StyledFileName>
              <StyledImageUpload htmlFor='file-upload' theme={theme}>
                <input
                  id='file-upload'
                  type='file'
                  onChange={fileChangeHandler}
                />
                <span>+</span>
              </StyledImageUpload>
              {error && <div>{error}</div>};
              <StyledButton
                color='primary'
                variant='contained'
                type='submit'
                disabled={isSubmitting}
              >
                UPLOAD
              </StyledButton>
            </StyledForm>
          </>
        )}
      </Formik>
    </StyledFormWrapper>
  );
};

export default AddFileForm;
