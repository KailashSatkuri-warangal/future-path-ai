// backend/index.js
// Entry point for backend server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./config/database');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const ticketRoutes = require('./routes/tickets');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');

// API routes
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Backend API running', status: 'ok' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error', message: err.message });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Initialize database and start server
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✓ Database connection established');

        app.listen(port, () => {
            console.log(`✓ Server running on port ${port}`);
        });
    } catch (err) {
        console.error('✗ Unable to start server:', err);
        process.exit(1);
    }
})();
