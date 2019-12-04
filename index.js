const express=require("express")
const app=express()
const path=require("path")

app.set("port",process.env.PORT||3000)

app.use("/",express.static(path.join(__dirname,"public")))
app.use("/home",express.static(path.join(__dirname,"public/home.html")))

app.listen(app.get("port"),()=>console.log(`app listen on http://localhost:${app.get("port")}`))