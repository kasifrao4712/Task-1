const express = require("express")
const app = express();
const path = require(`path`);
const fs = require('fs');
const port = 100;




app.use(`/static`, express.static(`static`))


app.set(`view engine`,`pug`)
app.set(`views`, path.join(__dirname, `views`))


app.get("/",(req,res)=>{
    const params = {}
    res.status(200).render('index.pug', params );
})







app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}` )
 });