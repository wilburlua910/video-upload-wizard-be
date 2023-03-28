var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {VideoData} = require('../Database/database') //Db is set up 

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('Send video GET');

  const vd = await VideoData.findAll();
  console.log(vd);

});

router.post('/uploadFile', upload.single('videoFile'), async function(req, res, next) {
  console.log("POST hit");
  console.log(req.file, req.body)
  
  res.send("Test")

});


module.exports = router;
