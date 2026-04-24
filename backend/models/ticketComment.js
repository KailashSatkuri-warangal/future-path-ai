// Comment/Reply model for tickets
module.exports = (sequelize, DataTypes) => {
    const TicketComment = sequelize.define('TicketComment', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        comment: { type: DataTypes.TEXT, allowNull: false },
        ticketId: { type: DataTypes.INTEGER, allowNull: false },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    return TicketComment;
};
