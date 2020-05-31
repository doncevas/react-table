/**
 *
 * ListTable
 *
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';

import MaterialTable from 'material-table';

interface Props<T> {
  title: string;
  data: T[];
  columns: any[];
  isLoading: boolean;
  intl: { formatMessage: Function };
  disableActions?: boolean;
  onRemoveElement?: (id: string) => string;
  onEditElement?: (data: T) => T;
  onOpenElement?: (id: string) => string;
}

function ListTable<T extends { id: string; quantity?: number }>({
  title,
  data,
  columns,
  isLoading,
  intl,
  disableActions = false,
  onRemoveElement,
  onEditElement,
  onOpenElement,
}: Props<T>) {
  const tableLocalization = () => ({
    pagination: {
      labelDisplayedRows: `{from}-{to} ${intl.formatMessage(
        messages.of,
      )} {count}`,
      labelRowsSelect: intl.formatMessage(messages.rows),
      labelRowsPerPage: intl.formatMessage(messages.rowsPerPage),
      firstAriaLabel: intl.formatMessage(messages.firstAriaLabel),
      firstTooltip: intl.formatMessage(messages.firstAriaLabel),
      previousAriaLabel: intl.formatMessage(messages.previousAriaLabel),
      previousTooltip: intl.formatMessage(messages.previousAriaLabel),
      nextAriaLabel: intl.formatMessage(messages.nextAriaLabel),
      nextTooltip: intl.formatMessage(messages.nextAriaLabel),
      lastAriaLabel: intl.formatMessage(messages.lastAriaLabel),
      lastTooltip: intl.formatMessage(messages.lastAriaLabel),
    },
    toolbar: {
      nRowsSelected: `{0} ${intl.formatMessage(
        messages.row,
      )}(s) ${intl.formatMessage(messages.selected)}`,
      searchPlaceholder: intl.formatMessage(messages.search),
    },
    header: {
      actions: intl.formatMessage(messages.actions),
    },
    body: {
      emptyDataSourceMessage: intl.formatMessage(messages.noRecordsToDisplay),
      filterRow: {
        filterTooltip: intl.formatMessage(messages.filter),
      },
    },
  });

  const withActions = () => (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      isLoading={isLoading}
      actions={[
        {
          icon: 'visibility',
          tooltip: intl.formatMessage(messages.preview),
          iconProps: { color: 'action' },
          onClick: (event, rowData: T) =>
            !!onOpenElement && onOpenElement(rowData.id),
        },
        {
          icon: 'edit',
          tooltip: intl.formatMessage(messages.edit),
          iconProps: { color: 'primary' },
          onClick: (event, rowData: T) =>
            !!onEditElement && onEditElement(rowData),
        },
        {
          icon: 'delete',
          iconProps: { color: 'secondary' },
          tooltip: intl.formatMessage(messages.delete),
          onClick: (event, rowData: T) =>
            !!onRemoveElement && onRemoveElement(rowData.id),
        },
      ]}
      options={{
        actionsColumnIndex: -1,
        sorting: true,
      }}
      localization={tableLocalization()}
    />
  );

  const withOutActions = () => (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      isLoading={isLoading}
      options={{
        actionsColumnIndex: -1,
        sorting: true,
        rowStyle: (x: T) => {
          if (x && !x.quantity) {
            return { backgroundColor: 'rgba(0,52,103, 0.3)' };
          }
          return {};
        },
      }}
      localization={tableLocalization()}
    />
  );

  return <div>{disableActions ? withOutActions() : withActions()}</div>;
}

export default injectIntl(ListTable);
