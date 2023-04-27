import { NextFunction, Request, Response } from "express";



export class AuthController {
    constructor(){}

    static async Register(req: Request, res: Response, next: NextFunction){
          res.status(200).json({
            success: true,
            data: "ok"
          })
    }
}