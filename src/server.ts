import express from "express"
import mongo from "./config/mongo"
import api from "./routes"


const app = express()

mongo()
    .then(() => console.log("connected database"))
    .catch((err) => console.log(err))
app.use(api)

app.listen(3000, () => console.log("Connected app"))