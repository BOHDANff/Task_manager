import {Router} from "express";
import AuthController from "../controllers/AuthController.js";
import {body} from "express-validator";

const authRouter = new Router();

authRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
    AuthController.registration
);
authRouter.post('/login', AuthController.login);
authRouter.post('/logout', AuthController.logout);
authRouter.get('/confirm/:link', AuthController.confirm);
authRouter.get('/refresh', AuthController.refresh);

export default authRouter;