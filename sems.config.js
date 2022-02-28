// @ts-check

/**
 * @type {import('./src/type/ConfigType').ConfigType}
 **/
const semsConfig = {
  server: {
    port: 3333,
  },
  database: {
    type: 'mariadb',
    host: 'localhsot',
    port: 3306,
    database: 'db',
    username: 'root',
    password: 'root',
  },
  cache: {
    hostname: 'test',
    port: 6379,
    url: 'localhost',
  },
  storage: {
    multer: {
      dest: './mediafiles',
      limits: {
        fileSize: 100 * 1024 * 1024, // 100MB
      },
    },
  },
};

module.exports = semsConfig;
