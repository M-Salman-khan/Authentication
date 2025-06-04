const express = require("express")
const cookieParser = require("cookie-parser")
const PORT = 8000
const {} = require("./models/user")
const connectToMongoDB = require("./connect")
const path = require("path")
const {checkAuth} = require("./middleware/auth")

const staticRoutes = require("./routes/staticRoutes")
const userRoute = require("./routes/userRoute")

const app = express()

connectToMongoDB("mongodb://localhost:27017/auth").then(()=>console.log("MongoDB connected successfully!"))

app.set("view engine", "ejs")

app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use("/", checkAuth, staticRoutes)
app.use("/user", userRoute)

app.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`)
})