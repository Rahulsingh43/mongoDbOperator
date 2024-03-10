const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { error } = require('console');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.urlencoded({
    extended:true
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

const productRoute = require('./Route/productRoute');
const employeeRoute = require('./Route/employeeRoute');
app.use('/api',productRoute);
app.use('/api',employeeRoute);
const PORT = 4008;

const dbDriver = "mongodb+srv://rschandela75:gfyuikFj@cluster0.7zjnxg3.mongodb.net/mongoOperator";


mongoose.connect(dbDriver,{

}).then((result)=>{
    app.listen(PORT,()=>{
     console.log(`conected at https://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})
