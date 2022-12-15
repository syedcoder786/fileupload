import React from 'react';
import './App.css';
import AddImage from './components/AddImage';
import FetchImage from './components/FetchImage';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>

    <div className="App">
      <AddImage />
      <FetchImage />
    </div>

  </Provider>
  );
}

export default App;
