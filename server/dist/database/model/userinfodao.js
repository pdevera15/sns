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
let userinfos;
class userinfodao {
    static injectdb(conn) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userinfos) {
                return;
            }
            try {
                userinfos = yield conn.db(process.env.DB_NAME).collection("userinfo");
            }
            catch (error) {
                throw new Error("Cant Access userinfo");
            }
        });
    }
    static addUserinfo(userinfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userinfos.insertOne(userinfo);
            }
            catch (error) {
                throw new Error("Failed Insert");
            }
        });
    }
}
module.exports = userinfodao;
