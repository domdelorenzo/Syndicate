require('dotenv').config();
module.exports = {
  development: {
    database: 'syndicate_development',
    dialect: 'postgres'
  },
  test: {
    database: 'syndicate_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
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
