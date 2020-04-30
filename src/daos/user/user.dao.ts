import User, { IUser } from '../../entities/User';
import { db } from '../../core/database/config/index';

export interface IUserDao {
    getAllUsers: () => Promise<IUser[]>;
    getOneUser: (id: number) => Promise<IUser | null>;
    addUser: (user: IUser) => Promise<IUser>;
    updateUser: (id: number, user: IUser) => Promise<any>;
    deleteUser: (id: number) => Promise<void>;
};

class UserDao implements IUserDao {

    public async getAllUsers(): Promise<IUser[]> {
        try {
            let users = await db.User.findAll({raw: true});
            return users;
        }
        catch(err) {
            throw err;
        }
    };
    
    public async getOneUser(id: number): Promise<IUser | null> {
        try {
            let user = await db.User.findAll({where: {id}, raw: true});
            return user;
        }
        catch(err) {
            throw err;
        }
    };

    public async addUser(user: IUser): Promise<IUser> {
        try {
            console.log(user);
            let newUser = await db.User.create(user);
            return newUser;
        }
        catch(err) {
            throw err;
        }
    };

    public async updateUser(id: number, user: IUser): Promise<any> {
        try {
            let updatedUser = await db.User.update(user, {where: {id}});
            return updatedUser;
        }
        catch(err) {
            throw err;
        }
    };

    public async deleteUser(id: number): Promise<void> {
        try {
            let user = await db.User.destroy({where: {id}});
            return user;
        }
        catch(err) {
            throw err;
        }
    };

};

export default UserDao;