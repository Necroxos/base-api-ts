import { ITest } from '../../interfaces/test';
import testConnection from '../connection/index';

class TestService {

    /**
     * Test function
     * @returns {string} Test message
     */
    testService = (test: string): ITest => {
        const connection = testConnection.createConnection();
        return { message: 'Servicio activo', test, connection };
    };

}

const testService = new TestService();
export default testService;
