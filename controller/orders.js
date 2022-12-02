const Order = require('../models/orders');

exports.createOrder = async(req,res)=>{
    try{
        const {order_id,item_name,cost,order_date,delivery_date}= req.body;

        //checking required fields
        if(!order_id || !item_name || !cost || !order_date || !delivery_date){
            return res.status(400).json({
                code:400,
                status:"Error",
                message:"Enter required fields",
                data:{}
            })
        }
    
        const orderData = await Order.findOne({order_id})

        //checking duplicate order_id
        if(orderData){
            return res.status(403).json({
                code:403,
                status:"Error",
                message:"Order_id already exists",
                data:{}
            })
        }

        //new order details
        const createObject = {
            order_id,item_name,cost,order_date,delivery_date
        }

        //creating new order
        await Order.create(createObject);

        res.status(200).json({
            code:200,
            status:"OK",
            message:"Order created successfully",
            data:{}
        })

    }catch(err){
        return res.status(500).json({
            code:500,
            status:"Error",
            message:"Something wrong",
            data:{}
        })
    }
}

exports.updateOrder = async(req,res)=>{
    try{

        const {order_id,delivery_date} = req.body;

        //checking mandary field
        if(!order_id || !delivery_date){
            return res.status(400).json({
                code:400,
                status:"Error",
                message:"Enter required fields",
                data:{}
            })
        }

        const orderData = await Order.findOne({order_id})

        if(!orderData){
            return res.status(403).json({
                code:403,
                status:"Error",
                message:"Order_id does not exists",
                data:{}
            })
        }

        //updating delivery date
        await Order.findOneAndUpdate({order_id},{delivery_date})

        res.status(200).json({
            code:200,
            status:"OK",
            message:"Order updated successfully",
            data:{}
        })

    }catch(err){
        return res.status(500).json({
            code:500,
            status:"Error",
            message:"Something wrong",
            data:{}
        })
    }
}

exports.deleteOrder = async(req,res)=>{
    try{

        const {order_id} = req.body;

        if(!order_id){
            return res.status(400).json({
                code:400,
                status:"Error",
                message:"Enter order_id",
                data:{}
            })
        }

        const orderData = await Order.findOne({order_id})

        if(!orderData){
            return res.status(403).json({
                code:403,
                status:"Error",
                message:"Order_id does not exists",
                data:{}
            })
        }

        //deleting order
        await Order.findOneAndDelete({order_id})

        res.status(200).json({
            code:200,
            status:"OK",
            message:"Order deleted successfully",
            data:{}
        })

    }catch(err){
        return res.status(500).json({
            code:500,
            status:"Error",
            message:"Something wrong",
            data:{}
        })
    }
}

exports.listOrder = async(req,res)=>{
    try{

        //fetching all order data
        const orderData = await Order.find({},{_id:0,__v:0})

        res.status(200).json({
            code:200,
            status:"OK",
            message:"Orders fetched successfully",
            data:orderData
        })

    }catch(err){
        return res.status(500).json({
            code:500,
            status:"Error",
            message:"Something wrong",
            data:{}
        })
    }
}

exports.searchOrder = async(req,res)=>{
    try{

        const {order_id} = req.body;

        if(!order_id){
            return res.status(400).json({
                code:400,
                status:"Error",
                message:"Enter order_id",
                data:{}
            })
        }

        const orderData = await Order.findOne({order_id},{_id:0,__v:0})

        if(!orderData){
            return res.status(403).json({
                code:403,
                status:"Error",
                message:"Order_id does not exists",
                data:{}
            })
        }

        res.status(200).json({
            code:200,
            status:"OK",
            message:"Order fetched successfully",
            data:orderData
        })

    }catch(err){
        return res.status(500).json({
            code:500,
            status:"Error",
            message:"Something wrong",
            data:{}
        })
    }
}



