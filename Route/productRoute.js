const route = require('express').Router();
// const productController = require('../Controller/productController');
const {insert_product, comparison_operator, logical_operators, aggregatio_oper} = require('../Controller/productController')
const { addEmployee } = require('../Controller/employeeController');
// route.post('/add-product',productController.insert_product);
route.post('/add-product',insert_product);
route.post('/get-comparison', comparison_operator);
route.post('/get-logical-operator', logical_operators);
route.post('/get-aggregate', aggregatio_oper);

module.exports = route