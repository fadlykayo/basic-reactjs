import React from 'react';
import { Redux } from './redux';
import { Dashboard } from './pages';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Redux>
        <Dashboard/>
      </Redux>
    );
  }
}

export default App;
