import {Router} from "express";
import AuthController from "../controllers/AuthController.js";

const authRouter = new Router();

authRouter.post('/registration', AuthController.registration
);
authRouter.post('/login', AuthController.login);
authRouter.post('/logout', AuthController.logout);
authRouter.get('/confirm/:link', AuthController.confirm);
authRouter.get('/refresh', AuthController.refresh);

export default authRouter;