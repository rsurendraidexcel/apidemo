import { Sequelize } from 'sequelize-typescript';
import { Umzug, SequelizeStorage } from 'umzug';
import sequelize from './database';

const umzug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

export { umzug, sequelize };
