export interface IUser {

    id: number,
    name: string,
    age: number,
    country: string,
    email: string

};

class User implements IUser {

    public id: number;
    public name: string;
    public age: number;
    public country: string;
    public email: string;

    constructor(nameOrUser: string | IUser, age?: number, country?: string, email?: string, id?: number) {
        if (typeof nameOrUser === 'string') {
            this.name = nameOrUser;
            this.age = age || -1;
            this.country = country || '';
            this.email = email || '';
            this.id = id || -1;

        } else {
            this.name = nameOrUser.name;
            this.age = nameOrUser.age;
            this.country = nameOrUser.country;
            this.email = nameOrUser.email;
            this.id = nameOrUser.id;
        }
    }
};

export default User;