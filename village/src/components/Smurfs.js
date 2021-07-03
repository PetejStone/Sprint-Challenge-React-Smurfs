import React, { Component } from 'react';
import './components.css';
import Smurf from './Smurf';
import {Route} from 'react-router-dom';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurf-container">
        <h1>Smurf Village</h1>
        <ul className="smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Route
              render={
                (props) =>
              <Smurf
                {...props}
                editFormData={this.props.editFormData} 
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
                editSmurf={this.props.editSmurf}
              /> }
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
