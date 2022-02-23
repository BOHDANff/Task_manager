import {$api} from "../http";


export default class TaskService {
    static async getAll(userId) {
        return $api.get(`task/${userId}`)
    }

    static async getOne(id) {
        return $api.get(`task/one/${id}`)
    }

    static async create(task, userId) {
        return $api.post(`task/create/${userId}`, task)
    }

    static async edit(task) {
        return $api.put(`task/edit`, task)
    }

    static async delete(id) {
        return $api.delete(`task/delete/${id}`)
    }
}