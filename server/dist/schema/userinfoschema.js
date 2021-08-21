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
const userinfoschema = (conn) => __awaiter(void 0, void 0, void 0, function* () {
    yield conn.db(process.env.DB_NAME).command({
        collMod: "userinfo",
        validator: {
            $jsonSchema: {
                required: ["username", "password"],
                properties: {
                    username: {
                        bsonType: "string",
                        description: "must be a String",
                    },
                    password: {
                        bsonType: "string",
                        description: "password must be string",
                    },
                },
            },
        },
        validationLevel: "moderate",
    });
});
module.exports = userinfoschema;
