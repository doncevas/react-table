import { ErrorTypes } from '../../utils/global.interface';

export enum FormFieldType {
  TEXT = 'text',
  TEXT_AREA = 'textarea',
  NUMBER = 'number',
  SELECT = 'select',
  RADIO = 'radio',
  COLOR_PICKER = 'colorPicker',
  CHECKBOX = ' checkbox',
}

export interface FormError {
  message: string;
  type: ErrorTypes;
  errorValue: string | number | boolean;
}

export interface FormFieldOptions {
  id?: string;
  title: string;
  field: string;
  placeholder?: string;
  options: {
    type: FormFieldType;
    validations: FormError[];
    inputAdornment?: string;
  };
}
