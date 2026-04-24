// Sequelize rollback - drops all database tables
const { sequelize } = require('../config/database');

// Rollback schema: drops all tables
async function rollback() {
    try {
        await sequelize.drop();
        console.log('✓ All tables dropped successfully (rollback complete)');
        process.exit(0);
    } catch (err) {
        console.error('✗ Rollback failed:', err);
        process.exit(1);
    }
}

rollback();
