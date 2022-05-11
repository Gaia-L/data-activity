import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import MainComponent from './components/mainComponent';
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="App">
          <MainComponent />
        </div>
        <div className="footer">
          <p>© copyright Gaia</p>
        </div>
      </>
    )
  }
}
export default App;
