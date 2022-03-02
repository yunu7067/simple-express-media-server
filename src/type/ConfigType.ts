import mongoose from 'mongoose';
import multer from 'multer';

interface ServerConfigType {
  port?: number;
}

interface StorageConfigType {
  multer: multer.Options;
}

interface DatabaseConfigType {
  host: string;
  port?: number;
  database?: string;
  username?: string;
  password?: string;
  options?: mongoose.ConnectOptions;
}
interface CacheConfigType {
  url: string;
  hostname: string;
  port: number;
}

interface ConfigType {
  server: ServerConfigType;
  database: DatabaseConfigType;
  cache: CacheConfigType;
  storage: StorageConfigType;
}

export type {ConfigType, ServerConfigType, StorageConfigType, DatabaseConfigType, CacheConfigType};
