import React, { Component } from 'react';
import './components.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf);
    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  handleInputChange = e => {
    this.setState({
        smurf: {
          ...this.state.smurf,
       [e.target.name]: e.target.value 
        }
      }
       );
     if (e.target.name === 'height') {
        this.setState({
          smurf: {
            ...this.state.smurf,
            height: `${e.target.value}cm`
          }
        })
      }
  };

  render() {
  
    return (
      <div className="smurf-form-container">
        <form onSubmit={this.addSmurf} autoComplete="off" className="smurf-form">
        <input type="hidden" />
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height (in cm)"
            value={this.state.height}
            name="height"
            type="number"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
