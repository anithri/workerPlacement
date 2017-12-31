import React from 'react';
import 'styles/App.css';
import 'tachyons-custom/css/tachyons.css';
import PageRouter from './pages/Router';

// TODO Redux, React-Router,
class App extends React.PureComponent {
  render() {
    return (
      <PageRouter />
    );
  }
}

export default App;
