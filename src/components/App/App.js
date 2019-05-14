import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredAirplane: '',
      numberOfPlanes: 0,
    }
  }
  changePlane = (event) => {
    if (event.target.dataset.name === 'plane'){
      this.setState({
        enteredAirplane: event.target.value
      })
    } else if (event.target.dataset.name === 'number'){
      this.setState({
        numberOfPlanes : event.target.value
      })
    }
  }

  addPlane = (event) => {
    this.props.dispatch({ type: 'PLANE',
    airplane: {
      enteredAirplane: this.state.enteredAirplane,
      numberOfPlanes: this.state.numberOfPlanes},
    });
  }
  render() {
    const airplaneArray = this.props.reduxState.airplaneReducer.map((plane, index) => {
      return <p key={index}>{plane.enteredAirplane} {plane.numberOfPlanes}
      </p>
    })
    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airline Name" onChange={this.changePlane} data-name="plane"/>
        <input placeholder="Number of Planes" onChange={this.changePlane} data-name="number"/>
        <button onClick={this.addPlane}>Add Airline</button>
        {airplaneArray}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
