import React, { Component } from 'react';
import axios from 'axios';
//import './create-patient.css';
export default class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.onChangeCname = this.onChangeCname.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMno = this.onChangeMno.bind(this);
    this.onChangeMadicineno1 = this.onChangeMadicineno1.bind(this);
    this.onChangeMadicine1 = this.onChangeMadicine1.bind(this);
    this.onChangeDose1 = this.onChangeDose1.bind(this);
    this.onChangeMprice1 = this.onChangeMprice1.bind(this);
    this.onChangeMadicineno2 = this.onChangeMadicineno2.bind(this);
    this.onChangeMadicine2 = this.onChangeMadicine2.bind(this);
    this.onChangeDose2 = this.onChangeDose2.bind(this);
    this.onChangeMprice2 = this.onChangeMprice2.bind(this);
    this.onChangeTotalprice = this.onChangeTotalprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cname: '',
      age: '',
      gender: '',
      mno: "",
      madicineno1: '',
      madicine1: '',
      dose1: 0,
      mprice1: '',
      madicineno2: '',
      madicine2: '',
      dose2: 0,
      mprice2: '',

      totalprice: ''

    }
  }

  onChangeCname(e) {
    this.setState({
      cname: e.target.value
    })
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangeMno(e) {
    this.setState({
      mno: e.target.value
    })
  }
  onChangeMadicineno1(e) {
    this.setState({
      madicineno1: e.target.value
    })
  }
  onChangeMadicine1(e) {
    this.setState({
      madicine1: e.target.value
    })
  }
  onChangeDose1(e) {
    this.setState({
      dose1: e.target.value
    })
  }
  onChangeMprice1(e) {
    this.setState({
      mprice1: e.target.value
    })
  }
  onChangeMadicineno2(e) {
    this.setState({
      madicineno2: e.target.value
    })
  }
  onChangeMadicine2(e) {
    this.setState({
      madicine2: e.target.value
    })
  }
  onChangeDose2(e) {
    this.setState({
      dose2: e.target.value
    })
  }
  onChangeMprice2(e) {
    this.setState({
      mprice2: e.target.value
    })
  }
  onChangeTotalprice(e) {
    this.setState({
      totalprice: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const patient = {
      cname: this.state.cname,
      age: this.state.age,
      gender: this.state.gender,
      mno: this.state.mno,
      madicineno1: this.state.madicineno1,
      madicine1: this.state.madicine1,
      dose1: this.state.dose1,
      mprice1: this.state.mprice1,
      madicineno2: this.state.madicineno2,
      madicine2: this.state.madicine2,
      dose2: this.state.dose2,
      mprice2: this.state.mprice2,
      totalprice: this.state.totalprice,
    }

    console.log(patient);

    axios.post('http://localhost:5000/exercises/add', patient)
      .then(res => console.log(res.data));

    window.location = '/managePharmacy';

    this.setState({
      cname: '',
      age: '',
      gender: '',
      mno: "",
      madicineno1: '',
      madicine1: '',
      dose1: 0,
      mprice1: '',
      madicineno2: '',
      madicine2: '',
      dose2: 0,
      mprice2: '',
      totalprice: ''

    })
  }

  render() {
    return (
      <div className='createPatientPage'>
        <br />
        <div className='container' id="createPatientForm">
          <form onSubmit={this.onSubmit}>
            <h3 className="createPatientTitle">Add New Medicine</h3>
            <br />
            <div className="form-group">
              <label>Customer Name: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.cname}
                onChange={this.onChangeCname}
              />
            </div>
            <div className="form-group">
              <label>Age: </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
              />
            </div>

            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">Gender:</label>
              <select class="form-select" id="validationCustom04" required value={this.state.gender} onChange={this.onChangeGender}>

                <option>Male</option>
                <option>Female</option>


              </select></div>
            <div className="form-group">
              <label>Mobile Number : </label>
              <input type="text"
                required
                className="form-control"
                value={this.state.mno}
                onChange={this.onChangeMno}
              />
            </div>

            <div class="row">
              <div class="col-50">
                <h4>Madicine Name</h4>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.madicineno1}
                  onChange={this.onChangeMadicineno1}
                />

                <input type="text"
                  required
                  className="form-control"
                  value={this.state.madicineno2}
                  onChange={this.onChangeMadicineno2}
                />
              </div>
              <div class="col-50">
                <h4>Madicine no</h4>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.madicine1}
                  onChange={this.onChangeMadicine1}
                />
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.madicine2}
                  onChange={this.onChangeMadicine2}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-50">
                <h4>Dose</h4>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.dose1}
                  onChange={this.onChangeDose1}
                />


                <input type="text"
                  required
                  className="form-control"
                  value={this.state.dose2}
                  onChange={this.onChangeDose2}
                />
              </div>
              <div class="col-50">
                <h4>Price</h4>

                <input type="text"
                  required
                  className="form-control"
                  value={this.state.mprice1}
                  onChange={this.onChangeMprice1}
                />

                <input type="text"
                  required
                  className="form-control"
                  value={this.state.mprice2}
                  onChange={this.onChangeMprice2}
                />

              </div>



            </div>





            <label>Total Price: </label>
            <div>
              <input type="text"

                className="form-control"
                value={((this.state.mprice1 * this.state.dose1) + (this.state.mprice2 * this.state.dose2))}
                onClick={this.getTotal}
              />

            </div>
            <div className="form-group">
              <input type="Submit" value="Create Patient" className="btn btn-primary" onClick={this.getTotal} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}