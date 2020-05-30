import { FormFieldType, ErrorTypes } from 'utils/global.interface';
import { ProductFields } from './product.interface';
import { IntlProvider } from 'react-intl';
import messages from './messages';

const locale = 'en';
const intlProvider = new IntlProvider({ locale, messages });
const { intl } = intlProvider.getChildContext();

export const ProductFormFields: ProductFields[] = [
  {
    title: 'Name',
    field: 'name',
    placeholder: intl.formatMessage(messages.placeHolderProductName),
    options: {
      type: FormFieldType.TEXT,
      validations: [
        {
          message: intl.formatMessage(messages.errorMessageIsRequired),
          type: ErrorTypes.REQUIRED,
          errorValue: true,
        },
      ],
    },
  },
  {
    title: 'EAN',
    field: 'ean',
    placeholder: 'Pleas write product EAN',
    options: {
      type: FormFieldType.TEXT,
      validations: [
        {
          message: intl.formatMessage(messages.errorMessageIsRequired),
          type: ErrorTypes.REQUIRED,
          errorValue: true,
        },
        {
          message: 'Minimal value length 2',
          type: ErrorTypes.MIN_LENGTH,
          errorValue: 2,
        },
      ],
    },
  },
  {
    title: 'Type',
    field: 'type',
    placeholder: 'Pleas select type',
    options: {
      type: FormFieldType.TEXT,
      validations: [],
    },
  },
  {
    title: 'Weight',
    field: 'weight',
    placeholder: 'Pleas write weight',
    options: {
      type: FormFieldType.NUMBER,
      validations: [
        {
          message: 'Max weight 100kg',
          type: ErrorTypes.MAX,
          errorValue: 100,
        },
      ],
      inputAdornment: 'Kg',
    },
  },
  {
    title: 'Color',
    field: 'color',
    options: {
      type: FormFieldType.COLOR_PICKER,
      validations: [
        {
          message: intl.formatMessage(messages.errorMessageIsRequired),
          type: ErrorTypes.REQUIRED,
          errorValue: true,
        },
      ],
    },
  },
  {
    title: 'Active',
    field: 'active',
    options: {
      type: FormFieldType.CHECKBOX,
      validations: [],
    },
  },
];

export const ProductTableFields = [
  { title: intl.formatMessage(messages.productName), field: 'name' },
  { title: 'EAN', field: 'ean' },
  { title: 'Type', field: 'type' },
  { title: 'Weight', field: 'weight' },
  { title: 'Color', field: 'color' },
  { title: 'Active', field: 'active' },
];
