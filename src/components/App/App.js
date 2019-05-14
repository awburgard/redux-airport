import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from './modules/mapReduxStateToProps';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airline Name" />
        <button>Add Airline</button>
        <table>
          {/* Airlines should be listed here */}
        </table>
      </div>
    );
  }
}

export default App;
