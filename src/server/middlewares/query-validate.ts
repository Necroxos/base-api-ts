import { check } from 'express-validator';

class QueryValidator {

    public testValidationRule = () => (
        check('test').isString().isLength({ min: 4 })
    );
}

const paramsValidator = new QueryValidator();
export default paramsValidator;
