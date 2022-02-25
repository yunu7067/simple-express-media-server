import path from 'path';
import {ConfigType} from 'type';

const srcPath = require.main?.path || '';
const configPath: string = path.resolve(srcPath, '..', 'sems.config.js');
const config: ConfigType = require(configPath);

export {config};
