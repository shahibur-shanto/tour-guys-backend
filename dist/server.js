"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = 5000;
async function db_connect() {
    try {
        await mongoose_1.default.connect("mongodb+srv://my-book:gOBQ03IJT8rKkg5p@cluster0.qxopl.mongodb.net/tour-guys-bd?retryWrites=true&w=majority&appName=Cluster0"
        // "mongodb://127.0.0.1:27017/test"
        );
        app_1.default.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
        console.log("database connect successful");
    }
    catch (error) {
        console.log("failed to connect database: ", error);
    }
}
db_connect();
