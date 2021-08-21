const router = require('express').Router();
let Salary = require('../models/salary.model');

//retrieve all
router.route('/').get((req, res) => {
    Salary.find()
        .then(salary => res.json(salary))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const name = req.body.name;
    const month = req.body.month;
    const basicSalary = req.body.basicSalary;
    const noOfDays = req.body.noOfDays;
    const chanellingFee = req.body.chanellingFee;
    const noOfAppointments = req.body.noOfAppointments;
    const totalSalary = ((basicSalary * noOfDays) + (chanellingFee * noOfAppointments));

    const newSalary = new Salary({

        _id,
        name,
        month,
        basicSalary,
        noOfDays,
        chanellingFee,
        noOfAppointments,
        totalSalary

    });

    newSalary.save()
        .then(() => res.json('New salary entry added.\n Total Salary of employee: ' + totalSalary))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Salary.findById(req.params.id)
        .then(salary => res.json("Employee ID: " + salary._id + "\n" + "Employee name: " + salary.name + "\n" + "Total Salary: " + salary.totalSalary))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Salary.findByIdAndDelete(req.params.id)
        .then(() => res.json('Salary entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Salary.findById(req.params.id)
        .then(salary => {
            salary._id = req.body._id;
            salary.name = req.body.name;
            salary.month = req.body.month;
            salary.basicSalary = req.body.basicSalary;
            salary.noOfDays = req.body.noOfDays;
            salary.chanellingFee = req.body.chanellingFee;
            salary.noOfAppointments = req.body.noOfAppointments;
            salary.totalSalary = ((basicSalary * noOfDays) + (chanellingFee * noOfAppointments));

            salary.save()
                .then(() => res.json('Salary entry updated.\n Total salary of employee: ' + totalSalary))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;