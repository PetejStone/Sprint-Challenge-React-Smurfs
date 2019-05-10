import React, { Component } from 'react';
import './components.css';

class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.smurf
    };
  }

  editSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.editSmurf(this.state.smurf);
     //console.log(this.state.smurf.id)
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
    //  if (e.target.name === 'height') {
    //     this.setState({
    //       smurf: {
    //         ...this.state.smurf,
    //         height: `${e.target.value}cm`
    //       }
    //     })
    //   }
  };

  render() {
      console.log(this.state.smurf.height)
      
      
    return (
      <div className="smurf-form-container">
        <form onSubmit={this.editSmurf} autoComplete="off" className="smurf-form">
        <input type="hidden" />
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            type="text"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height (in cm)"
            value={this.state.smurf.height}
            name="height"
            type="number"
          />
          <button type="submit">Edit Smurf</button>
        </form>
      </div>
    );
  }
}

export default EditSmurf;
