"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const Client_1 = require("./utils/Client");
(0, dotenv_1.config)();
const client = new Client_1.RPCClient();
client.login({ clientId: process.env.CLIENTID });
