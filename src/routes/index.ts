import UsersRouter from "../modules/users/routes";
import AuthRouter from "../modules/auth/routes";
import { Router } from "express";

const router = Router()


router.use("/auth", AuthRouter)
router.use("/users", UsersRouter)

export default router