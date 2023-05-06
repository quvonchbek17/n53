import express from "express"
import mongo from "./config/mongo"
import api from "./routes"


const app = express()

import * as dotenv from "dotenv"
dotenv.config()

app.use(express.json())

mongo()
    .then(() => console.log("connected database"))
    .catch((err) => console.log(err))
app.use(api)

app.listen(3000, () => console.log("Connected app"))