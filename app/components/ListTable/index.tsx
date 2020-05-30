/**
 *
 * ListTable
 *
 */
import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import MaterialTable from 'material-table';

interface Props<T> {
  title: string;
  data: T[];
  columns: any[];
  isLoading: boolean;
  onAddFormOpen(state: boolean);
  onRemoveElement(id: string);
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
            tooltip: 'Product preview',
            iconProps: { color: 'action' },
            onClick: (event, rowData: T) => alert('You saved '),
          },
          {
            icon: 'edit',
            tooltip: 'Edit product',
            iconProps: { color: 'primary' },
            onClick: (event, rowData: T) => alert('You want to delete '),
          },
          {
            icon: 'delete',
            iconProps: { color: 'secondary' },
            tooltip: 'Delete product',
            onClick: (event, rowData: T) => props.onRemoveElement(rowData.id),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
}

export default ListTable;
