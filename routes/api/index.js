const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'Express React' });
});

module.exports = router;
