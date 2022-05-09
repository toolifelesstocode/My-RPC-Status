import { config } from 'dotenv';
import { RPCClient } from './utils/Client';
config()

const client = new RPCClient()

client.login({ clientId: process.env.CLIENTID })