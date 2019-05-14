import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredAirplane: '',
    }
  }
  changePlane = (event) => {
    this.setState({
      enteredAirplane: event.target.value,
    })
  }

  addPlane = (event) => {
    this.props.dispatch({ type: 'PLANE', airplane: this.state.enteredAirplane });
  }
  render() {
    const airplaneArray = this.props.reduxState.airplaneReducer.map((plane, index) => {
      return <p key={index}>{plane}</p>
    })
    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airline Name" onChange={this.changePlane} />
        <button onClick={this.addPlane}>Add Airline</button>
        {airplaneArray}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
