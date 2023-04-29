export default () => ({
  port: +process.env.PORT || 3000,
  default_limit: +process.env.DEFAULT_LIMIT,
  mongo: process.env.MONGODB,
});
