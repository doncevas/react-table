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
import { Button } from '@material-ui/core';

import { selectIsLoadingProducts, selectProducts } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ListTable from 'components/ListTable';
import {
  getProductsAction,
  createProductAction,
  removeProductAction,
} from './actions';
import { Product, ProductFields } from './product.interface';
import { ProductTableFields, ProductFormFields } from './product.config';

const stateSelector = createStructuredSelector({
  products: selectProducts(),
  isLoading: selectIsLoadingProducts(),
});

function Products(props: { intl: { formatMessage: Function } }) {
  useInjectReducer({ key: 'products', reducer: reducer });
  useInjectSaga({ key: 'products', saga: saga });
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector(stateSelector);
  const [isOpenAddForm, setAddFormState] = useState(false);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const addProduct = (payload: Product) => {
    dispatch(createProductAction(payload));
    setAddFormState(false);
  };

  const removeProduct = (id: string) => {
    dispatch(removeProductAction(id));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setAddFormState(true)}
        style={{ margin: 10 }}
      >
        <FormattedMessage {...messages.addButtonTitle} />
      </Button>
      <ListTable<Product>
        data={products}
        columns={ProductTableFields}
        title={props.intl.formatMessage(messages.tableTitle)}
        isLoading={isLoading}
        onAddFormOpen={setAddFormState}
        onRemoveElement={removeProduct}
      />
      <Form<Product, ProductFields>
        formTitle={props.intl.formatMessage(messages.createFormTitle)}
        onCloseForm={setAddFormState}
        onSubmitted={addProduct}
        fields={ProductFormFields}
        isOpen={isOpenAddForm}
      />
    </div>
  );
}

export default injectIntl(Products);
