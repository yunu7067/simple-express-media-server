import {ConfigErrorType} from '../type/ConfigErrorType';
import type {ConfigType} from '../type/ConfigType';

const checkPort = (port: number): boolean => {
  if (Number.isNaN(Number(port))) {
    return false;
  } else {
    return true;
  }
};

const ifAllConfigOptionsIsNormal = async (config: ConfigType): Promise<boolean | ConfigErrorType> => {
  if (checkPort(config.server.port)) {
    return Promise.resolve(true);
  } else {
    const err: ConfigErrorType = {cause: 'port is only number type', solution: 'chaange number type'};
    return Promise.reject(err);
  }
};

export {ifAllConfigOptionsIsNormal};
