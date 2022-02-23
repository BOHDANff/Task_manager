import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String, required: true},
    description: {type: String, required: true},
    priority: {type: Number, required: true},
    dueDate: {type: String, required: true},
    isDone: {type: Boolean, default: false},
})

export default mongoose.model('Task', TaskSchema)