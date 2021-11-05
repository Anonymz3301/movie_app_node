const mongoose = require("mongoose")

let mongoose_schema=mongoose.Schema
const appSchema = new mongoose_schema({
    Movie_Name: String, 
    actor: String ,
    actress: String ,
    director: String ,
    released_year: String ,
    camera: String ,
    producer: String ,
    language: String
})


var appModel = mongoose.model("apps", appSchema)
module.exports={appModel}
