require('dotenv').config();
module.exports = {
  development: {
    username: 'root',
    database: 'syndicate_development',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    database: 'syndicate_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    username: 'root',
    database: 'syndicate_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
};
