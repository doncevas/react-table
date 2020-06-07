/*
 *
 * Preview
 *
 */

import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectPreview, {
  selectPriceHistory,
  selectQuantityHistory,
} from './selectors';
import {
  setPriceAction,
  setQuantityAction,
  getPriceAction,
  getQuantitiesAction,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import TabsPanel from 'components/TabsPanel';
import Products from 'containers/Products';
import { debounce } from 'lodash';
import { TextField } from '@material-ui/core';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

const stateSelector = createStructuredSelector({
  preview: makeSelectPreview(),
  priceHistory: selectPriceHistory(),
  quantityHistory: selectQuantityHistory(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Preview(props: Props) {
  useInjectReducer({ key: 'preview', reducer: reducer });
  useInjectSaga({ key: 'preview', saga: saga });

  const { priceHistory, quantityHistory } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const quantityChangeHandler = useCallback(
    debounce((changes: number, id: string) => {
      dispatch(setQuantityAction({ id: id, quantity: changes }));
    }, 1000),
    [],
  );

  const priceChangeHandler = useCallback(
    debounce((changes: number, id: string) => {
      dispatch(setPriceAction({ id: id, price: changes }));
    }, 1000),
    [],
  );

  useEffect(() => {
    dispatch(getPriceAction());
    dispatch(getQuantitiesAction());
  }, [dispatch]);

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
                      <TextField
                        id={`${rowData.id}_quantity`}
                        label="Number"
                        type="number"
                        onBlur={e =>
                          quantityChangeHandler(
                            Number(e.target.value),
                            rowData.id,
                          )
                        }
                        defaultValue={rowData.quantity}
                        variant="outlined"
                      />
                    ),
                  },
                  {
                    title: 'Price',
                    field: 'price',
                    render: rowData => (
                      <TextField
                        id={`${rowData.id}_price`}
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onBlur={e =>
                          priceChangeHandler(Number(e.target.value), rowData.id)
                        }
                        variant="outlined"
                        defaultValue={rowData.price}
                      />
                    ),
                  },
                ]}
              />
            ),
          },
          {
            label: 'Price history',
            content: (
              <div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    title: {
                      text: 'Price history',
                    },
                    series: [
                      {
                        data: priceHistory.map(item => item.price),
                      },
                    ],
                  }}
                />
              </div>
            ),
          },
          {
            label: 'Quantity History',
            content: (
              <div>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={{
                    title: {
                      text: 'Quantity History',
                    },
                    series: [
                      {
                        data: quantityHistory.map(item => item.quantity),
                      },
                    ],
                  }}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default Preview;
