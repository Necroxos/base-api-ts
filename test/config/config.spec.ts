import { ValidationError } from 'joi';
import loadConfig from '../../src/config';

describe('config', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV };
    });

    describe('loadConfig', () => {

        it('should return app config', () => {
            const result = loadConfig.baseConfig();

            expect(result.NODE_ENV).toEqual('development');
            expect(result.PORT).toEqual(3000);
        });

        it('should error for invalid value for NODE_ENV', () => {
            process.env.NODE_ENV = 'test';

            try {
                loadConfig.baseConfig();
            } catch (error: any) {
                const err = (error as ValidationError).details[0];
                expect(err.message).toEqual('"NODE_ENV" must be one of [development, production]');
            }
        });

        it('should error for invalid value for PORT', () => {
            process.env.PORT = 'test';

            try {
                loadConfig.baseConfig();
            } catch (error: any) {
                const err = (error as ValidationError).details[0];
                expect(err.message).toEqual('"PORT" must be a number');
            }
        });

    });

});