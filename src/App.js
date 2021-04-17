import React from 'react';
import Counter from"./Counter";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
      return(
        <div className="App">
          <h1>This is a simple Counter</h1>
          <Counter />
        </div>
      );
  }
}

export default App;
