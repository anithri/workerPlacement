import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './Store';

import 'styles/App.css';
// import themes from 'styles/Themes.css';

import 'tachyons-custom/css/tachyons.css';
import PageRouter from './pages/Router';
import action from 'redux-auto';

class App extends React.Component {
  render() {
    const history = createHistory();
    const store = configureStore(history);
    action.messages.add({body: "wooticus Prime!"});
    return (
      <Provider store={store}>
        <PageRouter history={history}/>
      </Provider>
    );
  }
}

export default App;
