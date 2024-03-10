const productModel = require('../Model/ProductModel');

// exports.insert_product = async (req, resp)=>{
//     try {
//         const newProduct = new productModel(req.body);
//         // Save the product to the database
//         await newProduct.save();
//         // Respond with success message
//         return resp.status(200).json({
//             status: 'success',
//             message: 'Product added successfully'
//         });
//         console.log('dfjdnf');
//         console.log(req.body);
//     } catch (error) {
//         return resp.status(401).json({
//             status:'error',
//             message:error.message
//         })
//     }
// }

const insert_product = async function (req,resp) {
    try {
        let data = req.body.data
        // console.log(data);
     let prods = await productModel.insertMany(data);
        // console.log(req.body);
        // tutorModel({
        //     name: req.body.name
        // }).save().then(async(tutor)=>{
           return resp.status(200).json({status:"success",message:"Product added successfuly",data:prods})
        // })
    } catch (error) {
        return resp.status(401).json({status:"error",message:error.message})
    }
}

const comparison_operator = async function (req, resp) {
    try {
        
        // const products = await productModel.find({'price':{$gt:1000}}).count()
        // const products = await productModel.find({'price':{$eq:2200}},{price:1,product:1,brand:1});
        // const products = await productModel.find({'price':{$gt:2200, $lt:2500}},{price:1,product:1,brand:1});
        // const products = await productModel.find({'price':{ $gte:2500}}).count();
        // const products = await productModel.find({'price':{$ne:2200}}).count();
        const products = await productModel.find({brand:{$in:['Nike','Adidas']}},{price:1,product:1,brand:1});
        // const products = await productModel.find({brand:{$nin:['Nike','Adidas']}}).count();
        return resp.status(200).json({status:"success",message:"Product fetched successfuly",data:products})

    } catch (error) {
        return resp.status(401).json({status:"error",message:error.message})
        
    }
}

const logical_operators = async function (req, resp) {
    try {
        // const products = await productModel.find({$and:[{price:{$eq:2200}}, {brand:'Calvin Klein'}]},{brand:1, price:1})
        // const products = await productModel.find({$or:[{price:{$eq:2200}}, {brand:'Calvin Klein'}]},{brand:1, price:1})
        // const products = await productModel.find({$or:[{price:{$gte:2200}}, {brand:'Calvin Klein'}]}).count();
        // const products = await productModel.find({$or:[{price:{$gt:2200}}, {brand:'Calvin Klein'}]}).count();
        // const products = await productModel.find({$or:[{price:{$gt:2200}}]}).count();
        // const products = await productModel.find({$nor:[{price:{$gt:2200}}]}).count();
        const products = await productModel.find({$nor:[{price:{$gt:2200}},{brand:'Calvin Klein'}]}).count();
        // const products = await productModel.find({price:{$not:{$eq:2200}}}).count();
        return resp.status(200).json({status:"success",message:"Product fetched successfuly",data:products})
    } catch (error) {
        return resp.status(401).json({status:"error",message:error.message})
    }
}

const aggregatio_oper = async function (req,resp) {
    try {
      let products = await productModel.aggregate([{$limit:16},{$sort:{price:-1}}]);
        return resp.status(200).json({status:"success",message:"Product fetched dfdsuccessfuly",data:products})
    } catch (error) {
        return resp.status(401).json({status:"error",message:error.message})
    }
}
module.exports = {insert_product, comparison_operator, logical_operators, aggregatio_oper};