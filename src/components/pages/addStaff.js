import React, { Component } from 'react';
import axios from 'axios';
import './staff.css';

export default class AddStaff extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
            nic: '',
            gender: '',
            phone: '',
            email: '',
            username: '',
            password: '',
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
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
            _id: this.state._id,
            name: this.state.name,
            nic: this.state.nic,
            gender: this.state.gender,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log(staff);

        axios.post('http://localhost:5000/staff/add', staff)
            .then(res => console.log(res.data));

        alert("New Staff Member Added!");
        window.location = '/addStaff';

    }


    render() {
        return (
            <div className='addStaff'>
                <div className='container'>
                    <h3>ADD NEW STAFF MEMBER</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Staff ID: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state._id}
                                onChange={this.onChangeID}
                            />
                        </div>
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
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.onChangeGender}
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

                        <br />
                        <div className="form-group">
                            <input type="submit" value="REGISTER EMPLOYEE" className="btn btn-primary" />
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}