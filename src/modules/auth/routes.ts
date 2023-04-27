import { Router } from "express";
import { AuthController } from "./auth";

const AuthRouter = Router()


AuthRouter
    .post("/register", AuthController.Register)
    
export default AuthRouter