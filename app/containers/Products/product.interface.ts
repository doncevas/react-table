import { FormFieldType } from 'utils/global.interface';
import { FormError } from 'components/Form/form.interface';

export interface Product {
  id: string;
  name: string;
  ean: string;
  type: any;
  weight: number;
  color: string;
  active: boolean;
}

export interface ProductFields {
  title: string;
  field: string;
  placeholder?: string;
  options: {
    type: FormFieldType;
    validations: FormError[];
    inputAdornment?: string;
  };
}
