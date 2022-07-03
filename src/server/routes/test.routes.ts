import { Router } from 'express';
import validate from '../middlewares/validate';
import testController from '../controllers/test.controller';
import paramsValidator from '../middlewares/query-validate';

class TestRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', paramsValidator.testValidationRule(), validate, testController.testFoo);
    }
}

const testRoutes = new TestRoutes();
export default testRoutes.router;
