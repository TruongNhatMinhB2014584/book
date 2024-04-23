const { MongoClient } = require("mongodb");

class MongoDB {
    static client = null; // Sửa đổi ở đây: khai báo thuộc tính client

    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;
