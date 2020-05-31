import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import GlobalStyle from '../../global-styles';
import Layout from 'containers/Layout';

function App() {
  return (
    <div>
      <Layout />
      <GlobalStyle />
    </div>
  );
}
export default hot(App);
