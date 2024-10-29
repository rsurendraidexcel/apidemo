import { runMigrations, rollbackMigration } from './migrations/index';

(async () => {
  try {
      await runMigrations();
    // Or to rollback
    // await rollbackMigration();
  } catch (error) {
    console.error('Migration error:', error);
  }
})();