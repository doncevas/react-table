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
  onRemoveElement(id: string);
  onEditElement(data: T);
  onOpenElement(id: string);
  intl: { formatMessage: Function };
}

function ListTable<T extends { id: string }>(props: Props<T>) {
  return (
    <div>
      <MaterialTable
        title={props.title}
        columns={props.columns}
        data={props.data}
        isLoading={props.isLoading}
        actions={[
          {
            icon: 'visibility',
            tooltip: props.intl.formatMessage(messages.preview),
            iconProps: { color: 'action' },
            onClick: (event, rowData: T) => props.onOpenElement(rowData.id),
          },
          {
            icon: 'edit',
            tooltip: props.intl.formatMessage(messages.edit),
            iconProps: { color: 'primary' },
            onClick: (event, rowData: T) => props.onEditElement(rowData),
          },
          {
            icon: 'delete',
            iconProps: { color: 'secondary' },
            tooltip: props.intl.formatMessage(messages.delete),
            onClick: (event, rowData: T) => props.onRemoveElement(rowData.id),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
          sorting: true,
        }}
        localization={{
          pagination: {
            labelDisplayedRows: `{from}-{to} ${props.intl.formatMessage(
              messages.of,
            )} {count}`,
            labelRowsSelect: props.intl.formatMessage(messages.rows),
            labelRowsPerPage: props.intl.formatMessage(messages.rowsPerPage),
            firstAriaLabel: props.intl.formatMessage(messages.firstAriaLabel),
            firstTooltip: props.intl.formatMessage(messages.firstAriaLabel),
            previousAriaLabel: props.intl.formatMessage(
              messages.previousAriaLabel,
            ),
            previousTooltip: props.intl.formatMessage(
              messages.previousAriaLabel,
            ),
            nextAriaLabel: props.intl.formatMessage(messages.nextAriaLabel),
            nextTooltip: props.intl.formatMessage(messages.nextAriaLabel),
            lastAriaLabel: props.intl.formatMessage(messages.lastAriaLabel),
            lastTooltip: props.intl.formatMessage(messages.lastAriaLabel),
          },
          toolbar: {
            nRowsSelected: `{0} ${props.intl.formatMessage(
              messages.row,
            )}(s) ${props.intl.formatMessage(messages.selected)}`,
            searchPlaceholder: props.intl.formatMessage(messages.search),
          },
          header: {
            actions: props.intl.formatMessage(messages.actions),
          },
          body: {
            emptyDataSourceMessage: props.intl.formatMessage(
              messages.noRecordsToDisplay,
            ),
            filterRow: {
              filterTooltip: props.intl.formatMessage(messages.filter),
            },
          },
        }}
      />
    </div>
  );
}

export default injectIntl(ListTable);
