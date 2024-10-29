// src/migrations/index.ts

import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import path from 'path';
import fs from 'fs';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root@123',
  database: 'park',
});

const migrationsPath = path.join(__dirname);

const getMigrations = () =>
  fs
    .readdirSync(migrationsPath)
    .filter((file) => file.endsWith('.ts') || file.endsWith('.js')) // Adjust for .js or .ts files
    .map((file) => ({
      name: file,
      path: path.join(migrationsPath, file),
    }));
    
// Initialize Umzug with Sequelize and dynamic migration loading
const umzug = new Umzug({
  migrations: getMigrations().map(({ name, path }) => ({
    name,
    up: async () => { 
      if(path.includes("index")!=true){
        const goup = require(path);
        goup.up(sequelize.getQueryInterface(), Sequelize);
      }
      
    },
    down: async () => {
      if(path.includes("index")!=true){
        const godwon = require(path);
        godwon.down(sequelize.getQueryInterface(), Sequelize);
      }
    },
  })),
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console, 
});

// Export Umzug instance and helper methods for migration actions
export const runMigrations = async () => {
  await umzug.up();
  console.log('All migrations have been run');
};

export const rollbackMigration = async () => {
  await umzug.down();
  console.log('Last migration has been reverted');
};
export default umzug;