import { IUserDao } from '../daos/user/user.dao';

export interface IUserService {
    getAllUsers(): Promise<any>;
    getOneUser(id: number): Promise<any>;
    createUser(user: any): Promise<any>;
    updateUser(user: any, id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
};

export class UserService implements IUserService {

    private userDao: IUserDao;

    constructor(private _uD: IUserDao) {
        this.userDao = this._uD;
    };

    public async getAllUsers(): Promise<any> {
        try {
            return await this.userDao.getAllUsers();
        }
        catch(err) {
            throw err;
        }
    };

    public async getOneUser(id: number): Promise<any> {
        try {
            return await this.userDao.getOneUser(id);
        }
        catch(err) {
            throw err;
        }
    };

    public async createUser(user: any): Promise<any> {
        try {
            console.log(user);
            return await this.userDao.addUser(user);
        }
        catch(err) {
            throw err;
        }
    };

    public async updateUser(id: number, user: any): Promise<any> {
        try {
            let userForUpdate = await this.userDao.getOneUser(id)

            if(id === userForUpdate[0].id) {
                return await this.userDao.updateUser(id, user);
            } else {
                throw 'User doesn`t exists';
            }
        }
        catch(err) {
            throw err;
        }
    };

    public async deleteUser(id: number): Promise<any> {
        try {
            return await this.userDao.deleteUser(id);
        }
        catch(err) {
            throw err;
        }
    };

};

export default UserService;