const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.utils");

const PORT = config.app.port;
async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to DB");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });   
    } catch (error) {
        console.log("Cannot connect to DB", error);
        process.exit();
    }
}

startServer();