const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/products', ctrl.get_products );

router.get('/products/write', ctrl.get_products_write );

router.post('/products/write', ctrl.post_products_write );

router.get('/products/detail/:id', ctrl.get_products_detail );

module.exports = router;


