// Sequelize migration - creates all database tables
const { sequelize } = require('../config/database');

// Migration: creates all tables
async function migrate() {
    try {
        await sequelize.sync({ force: true });
        console.log('✓ All tables created successfully (migration complete)');
        process.exit(0);
    } catch (err) {
        console.error('✗ Migration failed:', err);
        process.exit(1);
    }
}

migrate();
