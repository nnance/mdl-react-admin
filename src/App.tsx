import React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header name="Nick" />
        <Description countBy={3} />
      </div>
    );
  }
}

export default App;