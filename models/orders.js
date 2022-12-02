const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id:{
        type:String,
        require:true
    },
    item_name:{
        type:String,
        require:true
    },
    cost:{
        type:Number,
        require:true
    },
    order_date:{
        type:String,
        require:true
    },
    delivery_date:{
        type:String,
        require:true
    }

})

module.exports = mongoose.model('Order',orderSchema);
