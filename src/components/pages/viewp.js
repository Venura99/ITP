import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import './register.css';

const Register = props => (
    <tr>
        <td>{props.register._id}</td>
        <td>{props.register.name}</td>
        <td>{props.register.address}</td>
        <td>{props.register.age}</td>
        <td>{props.register.gender}</td>
        <td>{props.register.nic}</td>
        <td>{props.register.phone}</td>
        <td>{props.register.email}</td>
        <td>{props.register.username}</td>
        <td>{props.register.password}</td>

        <td>
            <Link to={"/editp/" + props.register._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRegister(props.register._id) }}>delete</a>
        </td>
    </tr>
)

export default class Viewp extends Component {
    constructor(props) {
        super(props);

        this.deleteRegister = this.deleteRegister.bind(this);

        this.state = { register: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/register/')
            .then(response => {
                this.setState({ register: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteRegister(id) {
        axios.delete('http://localhost:5000/register/' + id)
            .then(res => console.log(res.data));

        this.setState({
            register: this.state.register.filter(sml => sml._id !== id)
        })
    }

    registerMembersList() {
        return this.state.register.map(currentregister => {
            return <Register register={currentregister} deleteRegister={this.deleteRegister} key={currentregister._id} />;
        })
    }


    render() {
        return (
            <div>
                <h3>VACCINATED PATIENTS' LIST</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>NIC</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.registerMembersList()}
                    </tbody>
                </table>
            </div>
        )
    }
}