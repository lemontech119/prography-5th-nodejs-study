class User{
    constructor(id, name, password, role = "normal"){
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }

    static newInstance (id, name, password){
        return new User(id, name, password);
    }

    toJSON(){
        return{
            id: this.id,
            name: this.name,
            password: this.password,
            role: this.role
        };
    }

    static fromData(data){
        return new User(data.id, data.name, data.password, data.role);
    }
}

module.exports = User;