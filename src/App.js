import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
     username: '',
     password: ''
    }
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>      
        {React.createElement('button', { className: 'greeting' }, 'Hello, world!')}
        <form className='Login'>
          <label>Username</label>
          <input id='email' onChange={this.handleInputChange} name='email' type='text' />
          <label>Password</label>
          <input id='password' onChange={this.handleInputChange} name='password' type='password' />
          <button>Submit</button>
        </form>
      </div>
      
    );
  }
  myFunction() {
    return (<button onclick="myFunction()">Click me</button>);
  }
  handleInputChange = (event) => {
    this.setState({
     [event.target.name]: event.target.value
    })
   }
}

export default App;
