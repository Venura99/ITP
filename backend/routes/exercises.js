const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const cname = req.body.cname;
  const age = Number(req.body.age);
  const gender = req.body.gender;
  const mno = req.body.mno;
  const madicineno1 = req.body.madicineno1;
  const madicine1 = req.body.madicine1;
  const dose1 = Number(req.body.dose1);
  const mprice1 = req.body.mprice1;
  const madicineno2 = req.body.madicineno2;
  const madicine2 = req.body.madicine2;
  const dose2 = Number(req.body.dose2);
  const mprice2 = req.body.mprice2;
  const totalprice = ((mprice1 * dose1) + (mprice2 * dose2));

  const newExercise = new Exercise({
    cname,
    age,
    gender,
    mno,
    madicineno1,
    madicine1,
    dose1,
    mprice1,
    madicineno2,
    madicine2,
    dose2,
    mprice2,
    totalprice
  });

  newExercise.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

