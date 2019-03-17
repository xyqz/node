var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb')

router.get('/', function (req, res, next) {

  let {dataName,q,rule,start,count} = res.params;
  if (!dataName) {
    res.send({error:1,msg:'dataName为必传参数'})
    return;
  }


  mgdb({
    collection: dataName 
  }, ({ collection, client }) => {
    collection.find().toArray((err, result) => {
      res.send({error:0,msg:'成功',result});
      client.close();
  })
  })

});

module.exports = router;
