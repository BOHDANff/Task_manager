import TaskService from "../service/TaskService.js";


class TaskController {
    async getAll(req, res, next){
        try {
            const posts = await TaskService.getAll(req.params.userId);
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res, next){
        try {
            const posts = await TaskService.getOne(req.params.id);
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async create(req, res, next){
        try {
            const post = await TaskService.create(req.body, req.params.userId)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async edit(req, res, next){
        try {
            const updatedPost = await TaskService.edit(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res, next){
        try {
            const post = await TaskService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new TaskController()