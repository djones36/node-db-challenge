const localPg = {
  host: 'localhost',
  port: 5000,
  user: 'dan',
  database: 'bussiness_api',
};

const pgUser = process.env.PG_USER || 'dan';
const pgDb = process.env.PG_DB || 'bussiness_api';

const prodConnection = `postgres://${pgUser}@localhost/${pgDb}`;




module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/file/bussiness_api.db3',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        // enforces foreign key constraints on SQLite, not needed for other DBMS
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  production: {
    client: 'pg',
    connection: probConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  }

};
