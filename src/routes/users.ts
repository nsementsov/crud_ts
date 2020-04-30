import { Request, Response, Router } from 'express';

import UserDao from '../daos/user/user.dao';
import { IUserService, UserService } from '../service/user.service';

const router = Router();
const userDao = new UserDao();
const userService: IUserService = new UserService(userDao);

router.get('/:id', async (req: Request, res: Response) => {
    try {
        let userId = parseInt(req.params.id);
        const user = await userService.getOneUser(userId);
        res.send(user[0]);
    }
    catch(err) {
        res.send(err);
    }
});

router.post('/create', async (req: Request, res: Response) => {
    try {
        let user = req.body;
        console.log(user);
        await userService.createUser(user);
        res.sendStatus(200);
    }
    catch(err) {
        res.send(err);
    }
});

router.put('/:id/update', async (req: Request, res: Response) => {
    try {
        let userId = parseInt(req.params.id);
        let user = req.body;
        await userService.updateUser(userId, user);
        res.sendStatus(200);
    }
    catch(err) {
        res.send(err);
    }
});

router.delete('/:id/delete', async (req: Request, res: Response) => {
    try {
        let userId = parseInt(req.params.id);
        await userService.deleteUser(userId);
        res.sendStatus(200);
    }
    catch(err) {
        res.send(err);
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.send(users)
    }
    catch(err) {
        res.send(err);
    }
});

export default router;