import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
function App(props) {
  return (
    <BrowserRouter>
      <Header store={props.store} />
      <Main state={props.store.getState()} />
    </BrowserRouter>
  );
}

export default App;
