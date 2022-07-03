import { Request, Response } from 'express';
import { EHttpStatusCode } from '../../enums/EHttpStatusCode';
import testService from '../services/test.service';

class TestController {

    public testFoo = async (req: Request, res: Response) => {
        try {
            const { test } = req.query;
            const testParam = String(test);
            const data = testService.testService(testParam);
            return res.status(EHttpStatusCode.Ok).json({ title: 'Controlador funcionando', data });
        } catch (error) {
            return res.status(EHttpStatusCode.InternalServerError).json(error);
        }
    };

}

const testController = new TestController();
export default testController;
