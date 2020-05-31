import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Checkbox, Typography } from '@material-ui/core';
import { FormFieldOptions } from '../form.interface';

const useStyles = makeStyles({
  input: {
    minWidth: 300,
    marginLeft: 10,
    marginRight: 10,
  },
});

export const StyledCheckbox = ({
  props,
  initValue,
}: {
  props: FormFieldOptions;
  initValue: boolean;
}) => {
  const classes = useStyles();
  const { control } = useFormContext();
  return (
    <div className={classes.input}>
      <Typography variant="caption" display="block" gutterBottom>
        {props.title}
        <Controller
          as={<Checkbox name="SomeName" />}
          name={props.field}
          control={control}
          defaultValue={initValue}
        />
      </Typography>
    </div>
  );
};

export default StyledCheckbox;
