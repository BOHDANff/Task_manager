import Task from "../models/TaskModel.js";


class TaskService {

    async getAll(user) {
        const tasks = await Task.find({user});
        return tasks;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('ID not given')
        }
        const task = await Task.findById(id);
        return task;
    }

    async create(task, user) {
        const createdTask = await Task.create({...task, user});
        return createdTask;
    }

    async edit(task) {
        if (!task._id) {
            throw new Error('ID not given')
        }
        const updatedTask = await Task.findByIdAndUpdate(task._id, task, {new: true})
        return updatedTask;
    }

    async delete(id) {
        if (!id) {
            throw new Error('ID not given')
        }
        const task = await Task.findByIdAndDelete(id);
        return task;
    }
}

export default new TaskService()