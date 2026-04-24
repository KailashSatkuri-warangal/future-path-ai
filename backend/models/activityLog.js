// Activity log model for tracking user actions
module.exports = (sequelize, DataTypes) => {
    const ActivityLog = sequelize.define('ActivityLog', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        action: { type: DataTypes.STRING, allowNull: false },
        entity: { type: DataTypes.STRING, allowNull: false }, // 'ticket', 'user', etc.
        entityId: { type: DataTypes.INTEGER, allowNull: false },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        details: { type: DataTypes.JSON, allowNull: true },
        createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    return ActivityLog;
};
