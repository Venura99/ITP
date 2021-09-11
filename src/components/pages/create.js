import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import './create.css';
export default class AddMadicine extends Component {
  constructor(props) {
    super(props);

    this.onChangeMid = this.onChangeMid.bind(this);
    this.onChangeMname = this.onChangeMname.bind(this);
    this.onChangeMtype = this.onChangeMtype.bind(this);
    this.onChangeBprice = this.onChangeBprice.bind(this);
    this.onChangeEdate = this.onChangeEdate.bind(this);
    this.onChangeBdate = this.onChangeBdate.bind(this);
    this.onChangeDosage = this.onChangeDosage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      mid: '',
      mname: '',
      mtype: '',
      bprice: 0,
      edate: new Date(),
      bdate: new Date(),
      dosage: '',
      users: []
    }
  }



  onChangeMid(e) {
    this.setState({
      mid: e.target.value
    })
  }
  onChangeMname(e) {
    this.setState({
      mname: e.target.value
    })
  }
  onChangeMtype(e) {
    this.setState({
      mtype: e.target.value
    })
  }
  onChangeBprice(e) {
    this.setState({
      bprice: e.target.value
    })
  }
  onChangeEdate(date) {
    this.setState({
      edate: date
    })
  }
  onChangeBdate(date) {
    this.setState({
      bdate: date
    })
  }
  onChangeDosage(e) {
    this.setState({
      dosage: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {

      mid: this.state.mid,
      mname: this.state.mname,
      mtype: this.state.mtype,
      bprice: this.state.bprice,
      edate: this.state.edate,
      bdate: this.state.bdate,
      dosage: this.state.dosage
    }

    console.log(exercise);

    axios.post('http://localhost:5000/madicines/add', exercise)
      .then(res => console.log(res.data));


    window.location = '/madicine-list';
  }

  render() {
    return (
      <div class="detailsBox">
        <h3>Add New Madicine</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Madicine Id : </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.mid}
              onChange={this.onChangeMid}
            />

          </div>

          <div className="form-group">
            <label>Madicine Name : </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.mname}
              onChange={this.onChangeMname}
            />



          </div>
          <div className="form-group">
            <label>Madicine Type : </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.mtype}
              onChange={this.onChangeMtype}
            />
          </div>
          <div className="form-group">
            <label>Buying Price : </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.bprice}
              onChange={this.onChangeBprice}
            />
          </div>
          <div className="form-group">
            <label>Expiry Date: </label>
            <div>
              <DatePicker
                selected={this.state.edate}
                onChange={this.onChangeEdate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Manufacture Date: </label>
            <div>
              <DatePicker
                selected={this.state.bdate}
                onChange={this.onChangeBdate}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Dosage : </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.dosage}
              onChange={this.onChangeDosage}
            />
          </div>

          <br></br>
          <div className="form-group">
            <input type="Submit" value="Add Madicine" className="btn btn-primary" />
          </div>
        </form>
      </div>

    )
  }
}