import { FormFieldType, ErrorTypes } from 'utils/global.interface';
import { ProductFields } from './product.interface';
import messages from './messages';

export const GetProductFormField = (intl: { formatMessage: Function }) => {
  const ProductFormFields: ProductFields[] = [
    {
      title: intl.formatMessage(messages.productName),
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
      title: intl.formatMessage(messages.productEan),
      field: 'ean',
      placeholder: intl.formatMessage(messages.productEanPlaceholder),
      options: {
        type: FormFieldType.TEXT,
        validations: [
          {
            message: intl.formatMessage(messages.errorMessageIsRequired),
            type: ErrorTypes.REQUIRED,
            errorValue: true,
          },
          {
            message: `${intl.formatMessage(messages.errorMessageMinLength)} 2`,
            type: ErrorTypes.MIN_LENGTH,
            errorValue: 2,
          },
        ],
      },
    },
    {
      title: intl.formatMessage(messages.productType),
      field: 'type',
      placeholder: intl.formatMessage(messages.productTypePlaceholder),
      options: {
        type: FormFieldType.TEXT,
        validations: [],
      },
    },
    {
      title: intl.formatMessage(messages.productWeight),
      field: 'weight',
      placeholder: intl.formatMessage(messages.productWeightPlaceholder),
      options: {
        type: FormFieldType.NUMBER,
        validations: [
          {
            message: `${intl.formatMessage(
              messages.errorMessageMaxWeight,
            )} 100kg`,
            type: ErrorTypes.MAX,
            errorValue: 100,
          },
        ],
        inputAdornment: 'Kg',
      },
    },
    {
      title: intl.formatMessage(messages.productColor),
      field: 'color',
      options: {
        type: FormFieldType.COLOR_PICKER,
        validations: [],
      },
    },
    {
      title: intl.formatMessage(messages.productActive),
      field: 'active',
      options: {
        type: FormFieldType.CHECKBOX,
        validations: [],
      },
    },
  ];
  return ProductFormFields;
};
