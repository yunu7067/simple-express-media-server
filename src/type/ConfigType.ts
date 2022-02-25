interface ServerConfigType {
  port?: number;
}
interface DatabaseConfigType {
  type: string;
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
}
interface CacheConfigType {
  url: string;
  hostname: string;
  port: number;
}

interface ConfigType {
  server?: ServerConfigType;
  database: DatabaseConfigType;
  cache: CacheConfigType;
}

export type {ConfigType};
