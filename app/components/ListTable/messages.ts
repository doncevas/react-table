/*
 * ListTable Messages
 *
 * This contains all the text for the ListTable component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ListTable';

export default defineMessages({
  of: {
    id: `${scope}.of`,
    defaultMessage: 'of',
  },
  row: {
    id: `${scope}.row`,
    defaultMessage: 'of',
  },
  selected: {
    id: `${scope}.selected`,
    defaultMessage: 'selected',
  },
  actions: {
    id: `${scope}.actions`,
    defaultMessage: 'Actions',
  },
  filter: {
    id: `${scope}.filter`,
    defaultMessage: 'Filter',
  },
  noRecordsToDisplay: {
    id: `${scope}.noRecordsToDisplay`,
    defaultMessage: 'No records to display!',
  },
  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Delete',
  },
  edit: {
    id: `${scope}.edit`,
    defaultMessage: 'Edit',
  },
  preview: {
    id: `${scope}.preview`,
    defaultMessage: 'Preview',
  },
  rows: {
    id: `${scope}.rows`,
    defaultMessage: 'rows',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
  rowsPerPage: {
    id: `${scope}.rowsPerPage`,
    defaultMessage: 'Rows per page:',
  },
  firstAriaLabel: {
    id: `${scope}.firstAriaLabel`,
    defaultMessage: 'First Page',
  },
  previousAriaLabel: {
    id: `${scope}.previousAriaLabel`,
    defaultMessage: 'Previous Page',
  },
  nextAriaLabel: {
    id: `${scope}.nextAriaLabel`,
    defaultMessage: 'Next Page',
  },
  lastAriaLabel: {
    id: `${scope}.lastAriaLabel`,
    defaultMessage: 'Last Page',
  },
});
