require("dotenv").config();

module.exports = {
  app: {
    name: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
    version: process.env.APP_VERSION,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
    environment: process.env.APP_ENV,
    clientId: process.env.APP_CLIENT_ID,
    clientSecret: process.env.APP_CLIENT_SECRET,
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  s3: {
    bucketname: process.env.DO_BUCKET_NAME,
    endpoint: process.env.DO_ENDPOINT,
    accesskey: process.env.DO_ACCESS_KEY,
    secretkey: process.env.DO_SECRET_KEY,
    region: process.env.DO_REGION
  },
};
