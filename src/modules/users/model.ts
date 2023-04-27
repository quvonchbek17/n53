import { Schema, model } from "mongoose";


const usersSchema = new Schema({
    fullname: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
        require: true
    },
    phone: {
        type: String,
        length: 12,
        unique: true,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }

})