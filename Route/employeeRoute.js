const route = require('express').Router();
const {  addEmployee, get_aggregate_employee} = require('../Controller/employeeController');

route.post('/add-embed-employee', addEmployee);
route.post('/get-agg-employees', get_aggregate_employee);

module.exports = route;