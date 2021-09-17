const command = process.argv[2];
const { addPlayer, listPLayer, updatePlayer, deletePlayer } = require("./player/player.methods");

const app = async () => {
    switch (command) {
        case "add":
            const playerObj = {
                name: process.argv[3],
                nation: process.argv[4],
                position: process.argv[5],
                currentVar: process.argv[6]
            };
            await addPlayer(playerObj);
            break;
        
        case "list":
            await listPLayer();
            break;
        
        case "update":
            const updateObj = {
                filter: process.argv[3],
                nation: process.argv[4],
                position: process.argv[5],
                currentVar: process.argv[6]
            };
            await updatePlayer(updateObj);
            break;

        case "delete":
            const deleteObj = {
                filter: process.argv[3]
            };
            await deletePlayer(deleteObj)
            break;
            

    }
};

app();