import AuthRouter from "../modules/auth/routes";
import { Router } from "express";

const router = Router()


router.use("/auth", AuthRouter)

export default router