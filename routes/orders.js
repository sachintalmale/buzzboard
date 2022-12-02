const router = require('express').Router();

const {createOrder,deleteOrder,searchOrder,listOrder,updateOrder} = require('../controller/orders')

router.post('/create',createOrder);
router.post('/update',updateOrder);
router.get('/list',listOrder);
router.post('/search',searchOrder);
router.delete('/delete',deleteOrder);

module.exports = router