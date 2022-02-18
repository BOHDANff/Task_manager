class UserDto {
    username;
    email;
    id;
    confirmedAt;

    constructor(model) {
        this.username = model.username
        this.email = model.email
        this.id = model._id
        this.confirmedAt = model.confirmedAt
    }
}

export default UserDto