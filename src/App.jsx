import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './Store';

import 'styles/App.css';
import 'tachyons-custom/css/tachyons.css';
import PageRouter from './pages/Router';

class App extends React.PureComponent {
  render() {
    const history = createHistory();
    const store = configureStore(history);
    return (
      <Provider store={store}>
        <PageRouter history={history}/>
      </Provider>
    );
  }
}

export default App;
