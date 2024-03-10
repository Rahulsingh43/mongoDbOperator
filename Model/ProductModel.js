const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
   product:{
    type:String,
    required:false
   },
   brand:{
    type:String,
   },
   price:{
    type:Number,
   },
   color:{
    type:String
   },
   size:{
    type:String
   },

},{
    strict:false,
    timestamps:true
})

const productSchema = new mongoose.model('product_model', productModel);

module.exports = productSchema