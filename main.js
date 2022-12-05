const express = require('express');
var ip = require("ip");


const app = express();

let port = 3030;

app.use(express.static('static'))

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/templates/index.html');
})

app.listen(port,()=>{
    
    let addr = ip.address() ;

    console.log("\nyou can enter the site with below links\n");
    console.log(`http://127.0.0.1:${port}`);
    console.log(`http://${addr}:${port}\n`);

});


