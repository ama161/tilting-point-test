import React from 'react';
import './App.css';
import List from './components/list/ListContainer';
import Filter from './components/filter/FilterContainer';

function App() {
  return (
    <div className="App">
        <Filter/>
        <List/>
    </div>
  );
}

export default App;
