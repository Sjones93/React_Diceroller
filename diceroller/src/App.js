import React, { Component } from 'react';

import './App.css';
import DiceRoller from './DiceRoller';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* below must be the same as what is imported from other file or it cannot be found */}
        <DiceRoller/>
      </div>
    );
  }
}

export default App;
