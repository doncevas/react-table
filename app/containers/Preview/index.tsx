/*
 *
 * Preview
 *
 */

import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectPreview from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TabsPanel from 'components/TabsPanel';
import ListTable from 'components/ListTable';
import { Product } from 'containers/Products/product.interface';
import Products from 'containers/Products';
import { debounce } from 'lodash';

const stateSelector = createStructuredSelector({
  preview: makeSelectPreview(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Preview(props: Props) {
  useInjectReducer({ key: 'preview', reducer: reducer });
  useInjectSaga({ key: 'preview', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { preview } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  const quantityChangeHandler = useCallback(
    debounce((changes: number, id: string) => {
      console.log(changes);
      console.log(id);
    }, 1000),
    [],
  );

  const priceChangeHandler = useCallback(
    debounce((changes: number, id: string) => {
      console.log(changes);
      console.log(id);
    }, 1000),
    [],
  );

  return (
    <div>
      <TabsPanel
        tabsContent={[
          {
            label: 'Product details',
            content: (
              <Products
                disableActions
                extraColumns={[
                  {
                    title: 'Quantity',
                    field: 'quantity',
                    render: rowData => (
                      <input
                        type="number"
                        onChange={e =>
                          quantityChangeHandler(
                            Number(e.target.value),
                            rowData.id,
                          )
                        }
                        value={rowData.quantity}
                      />
                    ),
                  },
                  {
                    title: 'Price',
                    field: 'price',
                    render: rowData => (
                      <input
                        type="number"
                        onChange={e =>
                          priceChangeHandler(Number(e.target.value), rowData.id)
                        }
                        value={rowData.price}
                      />
                    ),
                  },
                ]}
              />
            ),
          },
          {
            label: 'Price history',
            content: <div>Price history</div>,
          },
          {
            label: 'Quantity History',
            content: <div>Quantity Historys</div>,
          },
        ]}
      />
    </div>
  );
}

export default Preview;
