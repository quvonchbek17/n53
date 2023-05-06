import jwt from "jsonwebtoken"


export class Jwt {

    static async sign(payload: any) {
         return jwt.sign(payload,  process.env.SECRET_KEY || "")
    }

    static async verify(payload: any)  {
        return jwt.verify(payload, process.env.SECRET_KEY || "")
    }
}