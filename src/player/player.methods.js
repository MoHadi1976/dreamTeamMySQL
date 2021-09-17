const { DataTypes } = require("sequelize");
const Player = require("./player.model");

exports.addPlayer = async (playerObj) => {
    try {
        await Player.sync();
        await Player.create(playerObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listPLayer = async () => {
    try {
        const list = await Player.findAll();
        console.log(list);
    } catch (error) {
        console.log(error);
    }
};

exports.updatePlayer = async (updateObj) => {
    try {
        await Player.update({nation: updateObj.nation, position: updateObj.position, currentVar: updateObj.currentVar},
           { where: { name: updateObj.filter}});
    } catch (error) {
        console.log(error);
    }
};

exports.deletePlayer = async (deleteObj) =>{
    try {
        await Player.destroy({where: {
            name: deleteObj.filter
        }})
    } catch (error) {
        console.log(error)
    }
}