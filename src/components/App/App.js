import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airelin Name" />
        <button>Add Airline</button>
        <table>
          {/* Airlines should be listed here */}
        </table>
      </div>
    );
  }
}

export default App;
