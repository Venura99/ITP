const router = require('express').Router(); 
let Madicine = require('../models/Madicines'); 

router.route('/').get((req,res) => { 
    Madicine.find() 
    .then(madicine => res.json(madicine)) 
    .catch(err => res.status (400).json('Error:' + err));
});
router.route("/add").post((req, res) => {
const mid = req.body.mid; 
const mname = req.body.mname; 
const mtype = req.body.mtype; 
const bprice = req.body.bprice; 
const edate = Date.parse(req.body.edate); 
const bdate = Date.parse(req.body.bdate); 
const dosage = Number(req.body.dosage); 

const newMadicine = new Madicine({
    mid,
    mname,
    mtype,
    bprice,
    edate,
    bdate,
    dosage
}); 

newMadicine.save() 
    .then(() => res.json('Adding Success!')) 
    .catch(err=> res.status (400).json('Error: '+ err));
 }); 
 router.route("/edit/:id").put(async (req , res) => { 
     let madicineId = req.params.id ;
     const {mid,mname,mtype,bprice,edate,bdate,dosage} = req.body ; 
     const updatestudent = {
        mid,
        mname,
        mtype,
        bprice,
        edate,
        bdate,
        dosage
    } 
         
         const update = await Madicine.findnyrdanGupdate(madicineId, updatestudent) 
         .thend(() =>{ 
             res.status(200).send({statue: "Updating Success", madicine: update})
         }).catch((err) => { 
                console. log(err); 
                res. status (500).send({status: "Error with updating data" }); 
            })
})   

router.route("/delete/:id").delete(async (req, res) => { 
    let madicineId = req.params.id; 
    await Madicine.findayIdAndDelete(madicineId) 
    .then(() => {
    res.status(200).send({status: "Deleting Success"}); 
    }).catch((err) => { 
        console.log(err.message) ;
        res.status (500).send({status: "Error with delete madicine", error: err.message});
    })
})
 module.exports = router;

 