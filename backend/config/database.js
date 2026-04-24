// Database configuration
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mnc_app', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql', // Change to 'postgres', 'sqlite', etc. as needed
    logging: false, // Set to console.log to see SQL queries
});

// Import models
const User = require('./user')(sequelize, DataTypes);
const Ticket = require('./ticket')(sequelize, DataTypes);
const TicketComment = require('./ticketComment')(sequelize, DataTypes);
const ActivityLog = require('./activityLog')(sequelize, DataTypes);
const SupportAssignment = require('./supportAssignment')(sequelize, DataTypes);

// Define associations
User.hasMany(Ticket, { foreignKey: 'userId' });
Ticket.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Ticket.hasMany(TicketComment, { foreignKey: 'ticketId' });
TicketComment.belongsTo(Ticket, { foreignKey: 'ticketId' });

User.hasMany(TicketComment, { foreignKey: 'userId' });
TicketComment.belongsTo(User, { foreignKey: 'userId', as: 'author' });

User.hasMany(ActivityLog, { foreignKey: 'userId' });
ActivityLog.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(SupportAssignment, { foreignKey: 'supportStaffId' });
SupportAssignment.belongsTo(User, { foreignKey: 'supportStaffId' });

module.exports = {
    sequelize,
    User,
    Ticket,
    TicketComment,
    ActivityLog,
    SupportAssignment
};
