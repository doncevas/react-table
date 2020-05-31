/*
 * Products Messages
 *
 * This contains all the text for the Products container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Products';

export default defineMessages({
  tableTitle: {
    id: `${scope}.tableTitle`,
    defaultMessage: 'Products list',
  },
  addButtonTitle: {
    id: `${scope}.addButtonTitle`,
    defaultMessage: 'Add new',
  },
  createFormTitle: {
    id: `${scope}.createFormTitle`,
    defaultMessage: 'Create new product',
  },
  placeHolderProductName: {
    id: `${scope}.placeHolderProductName`,
    defaultMessage: 'Pleas write product name',
  },
  errorMessageIsRequired: {
    id: `${scope}.errorMessageIsRequired`,
    defaultMessage: 'This field is required',
  },
  errorMessageMinLength: {
    id: `${scope}.errorMessageMinLength`,
    defaultMessage: 'Minimal value length',
  },
  productName: {
    id: `${scope}.productName`,
    defaultMessage: 'Name',
  },
  productEan: {
    id: `${scope}.productEan`,
    defaultMessage: 'EAN',
  },
  productEanPlaceholder: {
    id: `${scope}.productEanPlaceholder`,
    defaultMessage: 'Pleas write product EAN',
  },
  productActive: {
    id: `${scope}.productActive`,
    defaultMessage: 'Active',
  },
  productColor: {
    id: `${scope}.productColor`,
    defaultMessage: 'Color',
  },
  productWeight: {
    id: `${scope}.productWeight`,
    defaultMessage: 'Weight',
  },
  productWeightPlaceholder: {
    id: `${scope}.productWeightPlaceholder`,
    defaultMessage: 'Pleas write weight',
  },
  productType: {
    id: `${scope}.productType`,
    defaultMessage: 'Type',
  },
  productTypePlaceholder: {
    id: `${scope}.productTypePlaceholder`,
    defaultMessage: 'Pleas select type',
  },
  tableTitleEdit: {
    id: `${scope}.tableTitleEdit`,
    defaultMessage: 'Edit product',
  },
  errorMessageMaxWeight: {
    id: `${scope}.errorMessageMaxWeight`,
    defaultMessage: 'Max weight',
  },
});
