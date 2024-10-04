import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'mydatabase',
  dialect: 'sqlite',
  storage: 'database.sqlite',
  models: [__dirname + '/../models'],
});

export default sequelize;