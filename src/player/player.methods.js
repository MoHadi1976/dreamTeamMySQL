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