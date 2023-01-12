const express = require("express")
const app = express()
const {config} = require("dotenv")
config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connection to database
const uri = process.env.URI
require("./helper/connect")(uri)



const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("SERVER WORKING ON PORT:" + port);
})