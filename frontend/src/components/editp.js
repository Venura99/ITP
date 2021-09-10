import React, { Component } from 'react';
import axios from 'axios';
import './register.css';

export default class Editp extends Component {
    constructor(props) {
        super(props);

        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            age: '',
            nic: '',
            phone: '',
            email: '',
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/register/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    age: response.data.age,
                    nic: response.data.nic,
                    phone: response.data.phone,
                    email: response.data.email,
                    username: response.data.username,
                    password: response.data.password
                })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const register = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            nic: this.state.nic,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log(register);

        axios.post('http://localhost:5000/register/update/' + this.props.match.params.id, register)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Profile</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}   
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>NIC: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.nic}
                            onChange={this.onChangeNIC} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}  
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="UPDATE" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}