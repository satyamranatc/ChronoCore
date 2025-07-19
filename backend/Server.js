import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import EmployeeRoute from "./Routes/EmployeeRoute.js"
import ConnectDB from "./Config/DbConfig.js"

const app = express()

app.use(cors())
app.use(express.json())

// -----Connect to DB-----
ConnectDB();


// -----Routes-----
app.get("/",(req,res) => res.send("Hello By ChroneCore API"))
app.use("/api/employee", EmployeeRoute)


// -----Server Config-----
const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))