// Support staff assignment model for load balancing
module.exports = (sequelize, DataTypes) => {
    const SupportAssignment = sequelize.define('SupportAssignment', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        supportStaffId: { type: DataTypes.INTEGER, allowNull: false },
        activeTickets: { type: DataTypes.INTEGER, defaultValue: 0 },
        maxCapacity: { type: DataTypes.INTEGER, defaultValue: 10 },
        isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true }
    });
    return SupportAssignment;
};
