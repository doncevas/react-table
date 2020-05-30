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
  productName: {
    id: `${scope}.productName`,
    defaultMessage: 'Name',
  },
});
