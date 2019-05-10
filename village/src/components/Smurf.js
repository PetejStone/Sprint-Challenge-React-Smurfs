import React from 'react';
import './components.css';

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  deleteSmurf = (e) => {
    e.preventDefault();
   const smurfId = e.target.parentNode.getAttribute('id');
    this.props.deleteSmurf(smurfId);
  }

  editSmurf = (e) => {
    e.preventDefault();
   const smurfId = e.target.parentNode.getAttribute('id');
    this.props.editSmurf(smurfId);
  }

  editFormData = () => {
   
    const smurf = {
      name: this.props.name,
      age: this.props.age,
      height: this.props.height.replace('cm',''),
      id: this.props.id
    }
    this.props.editFormData(smurf)
  }

  render() {
  return (
    <div className="smurf" id={this.props.id} >
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick={this.deleteSmurf} className="delete">X</button>
      <button onClick={this.editFormData}>Edit Smurf</button>
    </div>
  );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

