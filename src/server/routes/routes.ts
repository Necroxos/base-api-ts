import { Router } from 'express';
import testRoutes from './test.routes';

class IndexRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.use('/test', testRoutes);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
