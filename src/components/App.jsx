import React from 'react';
import 'styles/App.css';
import 'tachyons-custom/css/tachyons.css';

// import reactLogo from 'assets/img/react_logo.svg';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app bg-red max">
          <h1>Hello World!</h1>
          <p>Foo to the bar</p>
          {/*<img src={reactLogo} height="480"/>*/}
        </div>
    );
  }
}

export default App;
