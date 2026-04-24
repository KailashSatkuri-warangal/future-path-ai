// Ticket model
module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        status: { type: DataTypes.ENUM('open', 'in_progress', 'closed'), defaultValue: 'open' },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        assignedTo: { type: DataTypes.INTEGER, allowNull: true }
    });
    return Ticket;
};