import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    confirmedAt: {type: Boolean, default: false},
    confirmationLink: {type: String}
});

export default model('User', UserSchema)