import React, { useState, useEffect } from 'react';
import ColorPicker from 'material-ui-color-picker';
import { useFormContext } from 'react-hook-form';
import { FormFieldOptions } from '../form.interface';
import { Typography } from '@material-ui/core';

export const ColorPickerField = ({
  props,
  initData,
}: {
  props: FormFieldOptions;
  initData: string;
}) => {
  const [currentColor, setColor] = useState('');
  const { register } = useFormContext();

  useEffect(() => {
    if (initData) {
      setColor(initData);
    } else {
      setColor('#333');
    }
  }, [initData]);

  const changeColor = (color: string) => {
    if (color) {
      setColor(color);
    }
  };
  return (
    <div style={{ marginLeft: 10 }}>
      <Typography variant="caption" display="block" gutterBottom>
        {props.title}
      </Typography>
      <ColorPicker
        name={props.field}
        style={{
          width: 60,
          height: 30,
          backgroundColor: currentColor,
        }}
        onChange={changeColor}
      />
      <input
        name={props.field}
        defaultValue={currentColor}
        ref={register}
        disabled
      />
    </div>
  );
};

export default ColorPickerField;
