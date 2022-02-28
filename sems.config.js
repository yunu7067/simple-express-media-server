// @ts-check

/**
 * @type {import('./src/type/ConfigType').ConfigType}
 **/
const semsConfig = {
  server: {
    port: 3333,
  },
  database: {
    host: 'mongodb://localhost:27017/test',
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
