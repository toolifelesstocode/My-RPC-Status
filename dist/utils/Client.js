"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCClient = void 0;
const discord_rpc_1 = require("discord-rpc");
class RPCClient extends discord_rpc_1.Client {
    constructor() {
        super({ transport: 'ipc' });
        this.on('ready', () => {
            var _a;
            this.setActivity({
                smallImageKey: 'sham',
                smallImageText: 'sham moment',
                details: 'eZaR - A Discord bot',
                largeImageKey: 'ezar_green',
                largeImageText: 'The bot I made, yes yes.',
                buttons: [{ url: 'https://ezar.shamdev.xyz', label: 'Website' }, { url: 'https://ezar.shamdev.xyz/discord', label: 'Support' }]
            });
            console.log(`RPC enabled: ${(_a = this.user) === null || _a === void 0 ? void 0 : _a.id}`);
        });
    }
}
exports.RPCClient = RPCClient;
