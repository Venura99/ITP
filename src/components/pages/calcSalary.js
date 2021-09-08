import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class CalcSalary extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBasicSalary = this.onChangeBasicSalary.bind(this);
        this.onChangeNoOfDays = this.onChangeNoOfDays.bind(this);
        this.onChangeChanellingFee = this.onChangeChanellingFee.bind(this);
        this.onChangeNoOfAppointments = this.onChangeNoOfAppointments.bind(this);
        this.onChangeTotalSalary = this.onChangeTotalSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            name: '',
            date: new Date(),
            basicSalary: '',
            noOfDays: '',
            chanellingFee: '',
            noOfAppointments: '',
            totalSalary: '',
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

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onChangeBasicSalary(e) {
        this.setState({
            basicSalary: e.target.value
        });
    }

    onChangeNoOfDays(e) {
        this.setState({
            noOfDays: e.target.value
        });
    }

    onChangeChanellingFee(e) {
        this.setState({
            chanellingFee: e.target.value
        });
    }

    onChangeNoOfAppointments(e) {
        this.setState({
            noOfAppointments: e.target.value
        });
    }

    onChangeTotalSalary(e) {
        this.setState({
            totalSalary: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const salary = {
            _id: this.state._id,
            name: this.state.name,
            date: this.state.date,
            basicSalary: this.state.basicSalary,
            noOfDays: this.state.noOfDays,
            chanellingFee: this.state.chanellingFee,
            noOfAppointments: this.state.noOfAppointments,
            totalSalary: this.state.totalSalary
        }

        console.log(salary);

        axios.post('http://localhost:5000/salary/add', salary)
            .then(res => console.log(res.data));

        alert("Salary Entry Added!");
        window.location = '/calcSalary';
    }

    displaySalary = value => () => {
        console.log(value);
    };


    render() {
        return (
            <div className='container'>
                <h3>EMPLOYEE SALARY CALCULATION</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Employee ID: </label>
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
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Basic Salary: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.basicSalary}
                            onChange={this.onChangeBasicSalary}
                        />
                    </div>
                    <div className="form-group">
                        <label>Number of Days Worked: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.noOfDays}
                            onChange={this.onChangeNoOfDays}
                        />
                    </div>
                    <div className="form-group">
                        <label>Chanelling Fee: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.chanellingFee}
                            onChange={this.onChangeChanellingFee}
                        />
                    </div>
                    <div className="form-group">
                        <label>Number of Appointments: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.noOfAppointments}
                            onChange={this.onChangeNoOfAppointments}
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Salary: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.totalSalary}
                            onChange={this.onChangeTotalSalary}
                        />
                    </div>

                    <br />
                    <div className="form-group">
                        <input type="submit" value="Calculate Salary" className="btn btn-primary" />
                        <br />

                    </div>
                </form>
                <Link to="/viewSalary" className="btn btn-primary">View Salary</Link>
                <br />
            </div>

        )

    }

}