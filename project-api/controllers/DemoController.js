const routes = require("express").Router();
const Demo = require("../models/Demo")


routes.post("/", async(req, res)=>{
    
 

    await Demo.create(req.body);
    res.send({ success : true }); 
})

module.exports = routes;