const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empModel = new Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email_id:{
        type:String
    },
    salary:{
        type:Number
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    department:{
        name:{
            type:String
        }
    }
},{timestamps:true})

const employeeModel = new mongoose.model('employee',empModel);
module.exports  = employeeModel;