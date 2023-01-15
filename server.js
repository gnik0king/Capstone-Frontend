'use strict';

///////////////////////////////////////////////////////////////////////////
// requires

var path = require('path');
var express = require('express');
var mysql = require('mysql');
var sqlconfig=require('./sqlconfig.json');



////////////////////////////////////////////////////////////////////////////

var app = express();

////////////////////////////////////////////////////////////////////////////
// mysql connection script
var con = mysql.createConnection(sqlconfig);
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
var allitem;
  con.query("call getitemlist",function(err,result,fields){
    if(err)throw err;
    allitem=result;
  })
////////////////////////////////////////////////////////////////////////////


//var staticPath = path.join(__dirname, '/Client/build');
var staticPath = path.join(__dirname, './');
app.use(express.static(staticPath));
  
app.set('port', process.env.PORT || 8080);


///////////////////////////////////////////////////////////////////////////
// api write here

app.post("/post", (req, res) => {
  console.log("Connected to React");
});
  
app.get('/getdata',(req,res)=>{
  res.send(allitem)
})
///////////////////////////////////////////////////////////////////////////

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});