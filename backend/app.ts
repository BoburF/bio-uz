import express from "express"
const app = express()
import {config} from "dotenv"
config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connection to database
const uri = process.env.URI || "http://127.1.0.0"
import connectToMongoDB from "./helper/connect"
connectToMongoDB(uri)


import usersAuthorize from "./routes/routesUsers"
// routes
app.use("/api/users", usersAuthorize)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("SERVER WORKING ON PORT:" + port);
})