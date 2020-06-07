/*
 *
 * Products
 *
 */

import React, { useEffect, useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import Form from 'components/Form';
import { Button, Checkbox } from '@material-ui/core';

import { selectIsLoadingProducts, selectProducts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ListTable from 'components/ListTable';
import {
  getProductsAction,
  createProductAction,
  updateProductAction,
  removeProductAction,
} from './actions';
import { Product, ProductFields } from './product.interface';
import { GetProductFormField } from './product.config';

const stateSelector = createStructuredSelector({
  products: selectProducts(),
  isLoading: selectIsLoadingProducts(),
});

function Products(props: {
  history: any;
  intl: { formatMessage: Function };
  disableActions?: boolean;
  extraColumns?: any[] | null;
}) {
  useInjectReducer({ key: 'products', reducer: reducer });
  useInjectSaga({ key: 'products', saga: saga });
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector(stateSelector);
  const [isOpenForm, setFormState] = useState(false);
  const [editData, setEditData] = useState<Product>();
  const [tableData, setTableData] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  useEffect(() => {
    setTableData(products);
  }, [products]);

  const addOrEditProduct = (data: Product) => {
    if (editData && editData.id) {
      dispatch(updateProductAction({ ...editData, ...data }));
    } else {
      dispatch(createProductAction(data));
    }
    setFormState(false);
  };

  const removeProduct = (id: string) => {
    dispatch(removeProductAction(id));
  };

  const editProduct = (data: Product) => {
    setEditData(data);
    setFormState(true);
  };

  const openProduct = (id: string) => {
    props.history.push(`/product/${id}`);
  };

  const closeForm = () => {
    setEditData({} as Product);
    setFormState(false);
  };

  const createNewOpenForm = () => {
    setEditData({} as Product);
    setFormState(true);
  };

  const handleChange = (event, object: Product) => {
    dispatch(updateProductAction({ ...object, active: event.target.checked }));
  };

  return (
    <div>
      {!props.disableActions && (
        <Button
          variant="contained"
          color="primary"
          onClick={createNewOpenForm}
          style={{ margin: 10 }}
        >
          <FormattedMessage {...messages.addButtonTitle} />
        </Button>
      )}
      <ListTable<Product>
        disableActions={props.disableActions}
        data={tableData}
        columns={[
          {
            title: props.intl.formatMessage(messages.productColor),
            field: 'color',
            render: rowData => (
              <div
                style={{
                  width: 50,
                  height: 20,
                  backgroundColor: rowData.color,
                }}
              ></div>
            ),
          },
          {
            title: props.intl.formatMessage(messages.productName),
            field: 'name',
            defaultSort: 'asc',
          },
          {
            title: props.intl.formatMessage(messages.productEan),
            field: 'ean',
          },
          {
            title: props.intl.formatMessage(messages.productType),
            field: 'type',
          },
          {
            title: props.intl.formatMessage(messages.productWeight),
            field: 'weight',
          },
          {
            title: props.intl.formatMessage(messages.productActive),
            field: 'active',
            render: rowData => (
              <Checkbox
                id={rowData.id}
                checked={rowData.active}
                onChange={e => handleChange(e, rowData)}
                disableRipple
                color="primary"
              />
            ),
          },
          ...(props.extraColumns ? props.extraColumns : []),
        ]}
        title={props.intl.formatMessage(messages.tableTitle)}
        isLoading={isLoading}
        onRemoveElement={removeProduct}
        onOpenElement={openProduct}
        onEditElement={editProduct}
      />
      <Form<Product, ProductFields>
        initData={editData}
        formTitle={
          editData && editData.id
            ? props.intl.formatMessage(messages.tableTitleEdit)
            : props.intl.formatMessage(messages.createFormTitle)
        }
        onCloseForm={closeForm}
        onSubmitted={addOrEditProduct}
        fields={GetProductFormField(props.intl)}
        isOpen={isOpenForm}
      />
    </div>
  );
}

export default injectIntl(Products);
