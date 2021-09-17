const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");

const Player = sequelize.define("Player", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nation: {
        type: DataTypes.STRING,
        defaultValue: "Not Known",
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentVar: {
        type: DataTypes.STRING,
        defaultValue: "No"
    },
});

module.exports = Player;