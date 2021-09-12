import React, { Component } from 'react';
import axios from 'axios';
//import '../FinanceManagement/financeManage.css';

export default class CreateExpenses extends Component {
    constructor(props) {
        super(props);

        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
            type: '',
            department: '',
            Value: 0,
        }
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangeDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }

    onChangeValue(e) {
        this.setState({
            Value: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const expenses = {
            _id: this.state._id,
            type: this.state.type,
            department: this.state.department,
            Value: this.state.Value
        }

        console.log(expenses);

        axios.post('http://localhost:5000/expenses/add', expenses)
            .then(res => console.log(res.data));

        window.location = '/';
    }


    render() {
        return (

            <div className='calcSalaryPage'>
                <h3>ADD NEW EXPENSES</h3>
                <form className='container' id='calcForm' onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Expenses ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state._id}
                            onChange={this.onChangeID}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.department}
                            onChange={this.onChangeDepartment}
                        />
                    </div>
                    <div className="form-group">
                        <label>Value: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Value}
                            onChange={this.onChangeValue}
                        />
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Add Expenses" className="searchStaffBtn" />
                    </div>
                </form>
            </div>
        )
    }
}