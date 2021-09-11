import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import './madicine-list.css';
const Exercise = props => (
  <tr>


    <td>{props.exercise.mid}</td>
    <td>{props.exercise.mname}</td>
    <td>{props.exercise.mtype}</td>
    <td>{props.exercise.bprice}</td>
    <td>{props.exercise.edate.substring(0, 10)}</td>
    <td>{props.exercise.bdate.substring(0, 10)}</td>
    <td>{props.exercise.dosage}</td>

    <td>
      <Link to={"/editpatientPharm/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class MadicineList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { madicines: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/madicines/')
      .then(response => {
        this.setState({ madicines: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/madicines/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      madicines: this.state.madicines.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.madicines.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Madicine Details </h3>
        <table className="table">
          <thead className="thead-light">
            <tr>

              <th>Madicine Id</th>
              <th>Madicine Name</th>
              <th>Type</th>
              <th>Buying Price</th>
              <th>Expiry Date</th>
              <th>Manufacture Date</th>
              <th>Dosage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}