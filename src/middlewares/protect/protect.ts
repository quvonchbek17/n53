import {Request, Response, NextFunction } from "express";
import { Jwt } from "../../utils/jwt";
import model from "../../modules/users/model"
import { ProtectRequest } from "../../interfaces/ProtectRequest";

const protect = async(req: Request, res: Response, next: NextFunction) => {
  try {

    let authToken: string = ""

    const token = req.headers.authorization

    if (token && token.startsWith("Bearer ")) {
      authToken = token.split(" ")[1];
    }
    if (!authToken){
      res.status(401).json({
        success: false,
        message: "Foydalanish uchun tizimga kiring !"
      })
      return
    }

    const decodedToken = await Jwt.verify(authToken);


    if (!decodedToken){
      res.status(400).json({
        success: false,
        message: "Tokenda muammo bor !"
      })
      return
    }

    const user = await model.findOne({_id: decodedToken})


    if (!user){
      res.status(404).json({
        success: false,
        message: "User topilmadi !"
      })
      return
    }
    req.headers.authorization = user.id
    next()

  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Tokenda muammo yoki xatolik, Iltimos tokenni yangilang yoki tizimga qaytadan kiring !!!"
    })
    return
  }
}

export default protect;
