const bodyParser = require("body-parser")
const express = require("express")
const mongoose = require("mongoose")
const{appModel} = require("./components/model")
mongoose.connect("mongodb+srv://YaduCholayil:SPPYKC1807@cluster0.magb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


let app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use( (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials',true)
    next()
} )

app.post("/add", async (req,res) => {
    try {
        console.log(req.body)
        let app = new appModel(req.body)
        let result = await app.save()
        res.json(result)
    } catch (error) {
        res.send(500).send(error)
    }
    
})

app.get("/view", async(req,res)=>{
    try {
        var result = await appModel.find()
        res.json(result)
    } catch (error) {
        res.send(500).send(error)
    }
})

app.post("/delete", async(req,res)=>{
    try {
        var result = await appModel.findByIdAndDelete(req.body)
        res.json({"status": "Succesfully deleted"})
    } catch (error) {
        res.send(500).send(error)
    }
})

app.post("/update", async(req,res)=>{
    try {
        var result = await appModel.findByIdAndUpdate(req.body._id, req.body)
        res.json({"status": "Succesfully updated"})
    } catch (error) {
        res.send(500).send(error)
    }
})

app.post('/SearchMovie',async(req,res)=>{
    try {
        var result=await appModel.find(req.body)
        res.json(result)
        
    } catch (error) {
        res.send(500).send(error)  
        
    }
})

app.listen(8080, () => {
    console.log('Running')
})