"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Topicdao_1 = require("../model/Topicdao");
const mongodb_1 = require("mongodb");
class TopicRepo {
    // Create
    // Get All Topics
    static FindAllTopics(MongoClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MongoClient.collection(Topicdao_1.COLLECTION_NAME).find().toArray();
        });
    }
    // Get Topic
    static FindTopic(MongoClient, query) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = new mongodb_1.ObjectId(query._id);
            return yield MongoClient.collection(Topicdao_1.COLLECTION_NAME).findOne(id);
        });
    }
}
exports.default = TopicRepo;
