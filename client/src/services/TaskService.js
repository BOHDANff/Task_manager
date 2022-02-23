import {$api} from "../http";


export default class TaskService {
    static async getAll(userId) {
        return $api.get(`task/${userId}`)
    }

    static async getOne(id) {
        return $api.post(`task/one/${id}`)
    }

    static async create(userId,task) {
        return $api.post(`task/create/${userId}`, task)
    }

    static async edit(id, task) {
        return $api.post(`task/edit/${id}`, task)
    }

    static async delete(id) {
        return $api.post(`task/delete/${id}`)
    }
}