import React, { Component } from 'react';
import axios from 'axios';
import './staff.css';

export default class EditStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            nic: '',
            gender: '',
            phone: '',
            email: '',
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/staff/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    nic: response.data.nic,
                    gender: response.data.gender,
                    phone: response.data.phone,
                    email: response.data.email,
                    username: response.data.username,
                    password: response.data.password,
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

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
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

        const staff = {
            name: this.state.name,
            nic: this.state.nic,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log(staff);

        axios.post('http://localhost:5000/staff/update/' + this.props.match.params.id, staff)
            .then(res => console.log(res.data));

        window.location = '/viewStaff';
    }

    render() {
        return (
            <div className='editStaff'>
                <div className='container'>
                    <h3>Edit Employee Details</h3>
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
                            <label>NIC: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangeNIC}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Edit Employee Details" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}