const employeeModel = require('../Model/employeeModel');
const { Validator } = require("node-input-validator");

const addEmployee = async function (req, resp) {
    try {
        const rules = {
            first_name: "required|string|minLength:3",
            last_name: "required|string|minLength:2",
            email_id: "required|email",
            salary: "integer|required",
            gender: "string|required",
            department: "required|object",
            "department.name": "required|string|minLength:3",
          };
        const v = new Validator(req.body, rules);
        const newEmp = new employeeModel({ ...req.body });
        const newEmployeeAdded = await newEmp.save();
        return resp.status(200).json({status:"success",message:"Product fetched dfdsuccessfuly",data:newEmployeeAdded})
    } catch (error) {
        return resp.status(401).json({status:"error",message:error.message})
    }
}
const get_aggregate_employee = async function (req, resp) {
    try {
        // const employees = await employeeModel.find({first_name:'Roit'})
        // const employees = await employeeModel.aggregate([{$match:{'department.name':'Developer'}},{$sort:{first_name:1}}])
        // const employees = await employeeModel.aggregate([{$match:{gender:'female'}}]);
        //group by fieldname
        // const employees = await employeeModel.aggregate([{$group:{_id:'$department.name', totalEmployees:{$sum:1}}}])
        // const employees = await employeeModel.aggregate([{$group:{_id:'$department.name', totalSalary:{$sum:'$salary'}}}])
        //add field
        // const employees = await employeeModel.aggregate([{$match:{gender:'male'}},{$addFields:{"department.designatiion":"Junior App Developer"}}])
        // const employees = await employeeModel.aggregate([{$match:{gender:'male'}},{$addFields:{"hobby":"Singing"}}])
        // const employees = await employeeModel.aggregate([{$match:{first_name:'Rohit'}},{$addFields:{ hobby:"Singing"}}])
        const employees = await employeeModel.aggregate([{$match:{first_name:'Rohit'}},{$addFields:{ first_name:"$last_name", salary:90000,food:"Pizza"}}])

        return resp.status(200).json({status:"success",message:"Employee fetched successfuly",data:employees})
    } catch (error) {
        return resp.status(401).json({status:"error",message:error.message})
    }
}
module.exports = { addEmployee, get_aggregate_employee }