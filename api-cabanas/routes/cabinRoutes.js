// api/routes/cabinRoutes.js

const express = require('express');
const { getCabins } = require('../controllers/cabinController');
const router = express.Router();

router.get('/cabins', getCabins);

module.exports = router;
