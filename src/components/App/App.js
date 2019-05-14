import React, { Component } from 'react';
import './app.css'
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enteredAirplane: '',
      numberOfPlanes: '',
    }
  }
  changePlane = (event) => {
    if (event.target.dataset.name === 'plane') {
      this.setState({
        enteredAirplane: event.target.value
      })
    } else if (event.target.dataset.name === 'number') {
      this.setState({
        numberOfPlanes: event.target.value
      })
    }
  }

  clearInputs = (event) => {
    this.setState({
      enteredAirplane: '',
      numberOfPlanes: '',
    })
  }

  addPlane = (event) => {
    this.props.dispatch({
      type: 'PLANE',
      airplane: {
        enteredAirplane: this.state.enteredAirplane,
        numberOfPlanes: this.state.numberOfPlanes
      },
    });
    this.clearInputs();
  }

  render() {
    const airplaneArray = this.props.reduxState.airplaneReducer.map((plane, index) => {
      return <div key={index} className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5>
              {plane.enteredAirplane}
            </h5>
            <p>
              {plane.numberOfPlanes}
            </p>
          </div>
        </div>

      </div>
    })
    return (
      <div className="container">
        <div className="jumbotron jumbotron-plane">
          <h1>Redux Airport</h1>
          <h3>Add Airplanes</h3>
        </div>
        <div className="input-group mb-3">
          <input
            value={this.state.enteredAirplane}
            className="input-group-text mr-1"
            placeholder="Airline Name"
            onChange={this.changePlane}
            data-name="plane" />

          <input
            value={this.state.numberOfPlanes}
            className="input-group-text mr-1"
            placeholder="Number of Planes"
            onChange={this.changePlane}
            data-name="number" />

          <button onClick={this.addPlane} className="btn btn-primary">Add Airline</button>
        </div>
        <div className="row">
          {airplaneArray}
        </div>

      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
