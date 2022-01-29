import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/app.scss'
import List from './components/List';
import AppRouter from './components/AppRouter';
import { Link } from 'react-router-dom';

const App:FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List></List>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link className="App-link" to="/">Home</Link>
        <Link className="App-link" to="/todo">Todo</Link>
        <Link className="App-link" to="/chat">Chat</Link>
        <Link className="App-link" to="/account">Account</Link>
      </header>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;