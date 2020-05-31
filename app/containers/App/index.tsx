import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import ProductsPage from 'containers/Products';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LocaleToggle from '../LocaleToggle';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <LocaleToggle />
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
