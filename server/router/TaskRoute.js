import {Router} from "express";
import TaskController from "../controllers/TaskController.js";


const taskRouter = new Router()

taskRouter.get('/:userId', TaskController.getAll)
taskRouter.get('/:id', TaskController.getOne)
taskRouter.post('/create/:userId', TaskController.create)
taskRouter.put('/edit/:id', TaskController.edit)
taskRouter.delete('/delete/:id', TaskController.delete)

export default taskRouter