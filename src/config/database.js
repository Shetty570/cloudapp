import { Sequelize } from 'sequelize';

// Example database connection; replace with your actual database connection parameters
const sequelize = new Sequelize('cloud', 'suhasshetty', 'asdf', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;