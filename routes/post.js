const router = require("express").Router();
const verify = require('./veryfyToken')
router.get("/",verify, async (req, res) => {
 res.json({
     posts:{
         title:  'my first post',
         description: 'random data'
     }
 })
})
module.exports = router;