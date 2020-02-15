import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import HomePage from './containers/HomePage'
import Table from './containers/Table'
function App() {

  return (
    <Provider store={store}>
      <HomePage>
        <Table/>
      </HomePage>
    </Provider>
  );
}

export default App;
