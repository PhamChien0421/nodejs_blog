const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Search
router.use('/search', siteController.search);
// Home
router.use('/', siteController.index);

module.exports = router