/** @jsx jsx */
import { Fragment } from 'react';
import { css, jsx, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import NationalInsurance from './containers/NationalInsurance';

const App = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Global
        styles={css`
          body {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            margin-left: auto;
          }
        `}
      />
      <NationalInsurance />
    </Fragment>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default hot(App);
