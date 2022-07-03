import dotenv from 'dotenv';
import Joi from 'joi';
import { IConfigInfo } from '../interfaces/config';

dotenv.config();

function loadConfig(): IConfigInfo {
    const configSchema = Joi.object<IConfigInfo>({
        NODE_ENV: Joi.string().valid('development', 'production').required(),
        PORT: Joi.number().required(),
    });

    const { error, value } = configSchema.validate(process.env, { allowUnknown: true });
    console.log('Variables de entorno cargadas');

    if (error) {
        throw error;
    }
    return { ...value } as IConfigInfo;
}

export { loadConfig };
