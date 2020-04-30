import * as express from "express";
import * as bodyParser from "body-parser";
import router from './routes/index'

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.app.use('/', router)
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;