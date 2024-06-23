"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToursToDB = void 0;
const tours_model_1 = __importDefault(require("./tours.model"));
const createToursToDB = async (payload) => {
    const tours = new tours_model_1.default(payload);
    tours.save();
    return tours;
};
exports.createToursToDB = createToursToDB;
