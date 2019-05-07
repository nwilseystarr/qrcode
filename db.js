const Sequelize = require("sequelize");
const databaseName = "condo_db";

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://root:password@localhost:5432/${databaseName}`,
  {
    logging: false
  }
)

module.exports = db;

