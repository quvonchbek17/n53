import { Router } from "express";
import { UsersController } from "./users";
import protect from "../../middlewares/protect/protect";

const UsersRouter = Router()


UsersRouter
    .get("/profile", protect, UsersController.GetProfile)
    .patch("/update", protect, UsersController.Update)

export default UsersRouter