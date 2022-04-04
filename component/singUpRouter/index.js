const express = require('express');
const router = express.Router();
const singUpController = require('./singUpController');

router.get('/', (req, res) => {
    res.json({ message: 'hello' }
    );
})

router.post('/', singUpController.saveStoreOwnerInfo);

module.exports = router;