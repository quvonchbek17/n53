import { NextFunction, Request, Response } from "express";
import Users from "../users/model"
import { Jwt } from "../../utils/jwt"
import { ProtectRequest } from "@/interfaces/ProtectRequest";



export class UsersController {
    constructor(){}

    static async GetProfile(req: Request, res: Response, next: NextFunction){
        let user = await Users.findOne({_id: req.headers.authorization})
        res.status(200).json({
            success: true,
            data: user
        })
    }

    static async Update(req: Request, res: Response, next: NextFunction){
        const { fullname, email, phone, username } = req.body
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

        let updatedUser = await Users.findOneAndUpdate({_id: req.headers.authorization }, {
            $set: {
                fullname,
                username,
                phone,
                email
            }
        }, { new: true })
        res.status(200).json({
            success: true,
            data: updatedUser
        })
    }
}