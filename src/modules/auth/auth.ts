import { NextFunction, Request, Response } from "express";
import Users from "../users/model"
import { Jwt } from "../../utils/jwt"



export class AuthController {
    constructor(){}

    static async Register(req: Request, res: Response, next: NextFunction){
          try {
            let { fullname, username, phone, email } = req.body

            let checkUsername = await Users.findOne({username:username})


            if(checkUsername){
              res.status(409).json({
                success: false,
                message: "Username band"
              })
              return
            }

            let checkEmail = await Users.findOne({email:email})

            if(checkEmail){
              res.status(409).json({
                success: false,
                message: "Email band"
              })
              return
            }

            let checkPhone = await Users.findOne({phone:phone})

            if(checkPhone){
              res.status(409).json({
                success: false,
                message: "Telefon raqam band"
              })
              return
            }

            let newUser = await Users.create({fullname, username, phone, email})

            if(newUser){
              res.status(201).json({
                success: true,
                token: await Jwt.sign(newUser.id),
                data: newUser
              })
            } else {
              res.status(400).json({
                success: false,
                message: "Ishkal",
                data: newUser
              })
            }
          } catch (error) {
               console.log(error);
          }


    }
}