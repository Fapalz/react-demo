import React, { FC } from 'react';
import './assets/styles/app.scss'
import AppRouter from './components/AppRouter';
import ChatWidget from './components/Chat/ChatWidget';
import Menu from './components/Menu';

const App:FC = () => {
  return (
    <div className="app">
      <header className="App-header">
        <Menu items={[
          {
            to: '/',
            name: 'Home'
          },
          {
            to: '/todo',
            name: 'Todo'
          },
        ]}/>
        {/* <Link className="app-link" to="/">Home</Link>
        <Link className="App-link" to="/todo">Todo</Link>
        <Link className="App-link" to="/chat">Chat</Link>
        <Link className="App-link" to="/account">Account</Link> */}
      </header>
      <AppRouter></AppRouter>
      <ChatWidget/>
    </div>
  );
}

export default App;