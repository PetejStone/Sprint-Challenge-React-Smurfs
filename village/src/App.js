import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({smurfs: res.data})
      })
      .catch(err => console.log(err))
  }

  addSmurf = (smurf) => {
    axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res)
        this.setState({smurfs: res.data})
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  deleteSmurf = (smurfId) => {
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        console.log(res)
        this.setState({smurfs: res.data})
       

      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add a Smurf</NavLink>
          
        </nav>
        <Route path="/smurf-form" render={ (props) =>  <SmurfForm    {...props} addSmurf={this.addSmurf} /> } />
        <Route exact path="/" render={ (props) => <Smurfs  {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} /> }  />
      </div>
    );
  }
}

export default App;
