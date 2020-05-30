import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TextField, InputAdornment } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import { FormFieldOptions } from '../form.interface';
import { ErrorTypes } from 'utils/global.interface';

const useStyles = makeStyles(theme => ({
  input: {
    minWidth: 300,
    marginLeft: 10,
    marginRight: 10,
    margin: theme.spacing(1),
  },
}));

function Text({
  props,
  error,
  inputType = 'text',
}: {
  props: FormFieldOptions;
  error: ErrorTypes;
  inputType?: string;
}) {
  const classes = useStyles();
  const { control } = useFormContext();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // setErrorMessage(getErrorMessage(props.options.validations, error));
  }, [error]);

  return (
    <Controller
      as={
        <TextField
          error={!!errorMessage}
          className={classes.input}
          label={props.title}
          type={inputType}
          placeholder={props.placeholder}
          // helperText={errorMessage}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{`${
                props.options.inputAdornment || ''
              }`}</InputAdornment>
            ),
          }}
          variant="outlined"
        />
      }
      // rules={getValidators(props.options.validations)}
      name={props.field}
      control={control}
      defaultValue=""
    />
  );
}

export default Text;
