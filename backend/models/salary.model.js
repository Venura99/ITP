const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        trim: true

    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    basicSalary: {
        type: Number
    },
    noOfDays: {
        type: Number
    },
    chanellingFee: {
        type: Number
    },
    noOfAppointments: {
        type: Number
    },
    totalSalary: {
        type: Number
    }
}, {
    timestamps: true,
})

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;