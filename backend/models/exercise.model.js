const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const exerciseSchema = new Schema({ 
    cname: { 
        type: String, 
        required: true,    
    },
    age: { 
        type: Number, 
        required: true,    
    },
    gender: { 
        type: String, 
        required: true,    
    },
    mno: { 
        type: String, 
        required: true,    
    },
    madicineno1: { 
        type: String, 
        required: true,    
    },
    madicine1: { 
        type: String, 
        required: true,    
    },
    dose1: { 
        type: Number, 
        required: true,    
    },
    mprice1: { 
        type: Number, 
           
    },
    madicineno2: { 
        type: String, 
        required: true,    
    },
    madicine2: { 
        type: String, 
        required: true,    
    },
    dose2: { 
        type: Number, 
        required: true,    
    },
    mprice2: { 
        type: Number, 
          
    },
    
    totalprice: { 
        type: Number, 
          
    },
}, { 
        timestamps: true, 
})     
const Exercise = mongoose.model('Exercise', exerciseSchema); 
module.exports = Exercise;