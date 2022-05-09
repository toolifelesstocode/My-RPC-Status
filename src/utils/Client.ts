import { Client } from 'discord-rpc';

export class RPCClient extends Client {
    /** 
    * yes, RPC main client.
    */
    constructor() {
        super({ transport: 'ipc' });

        this.on('ready', () => {
            this.setActivity({ 
                smallImageKey: 'sham', 
                smallImageText: 'sham moment', 
                details: 'eZaR - A Discord bot',
                largeImageKey: 'ezar_green',
                largeImageText: 'The bot I made, yes yes.',
                buttons: [{ url: 'https://ezar.shamdev.xyz', label: 'Website' }, { url: 'https://ezar.shamdev.xyz/discord', label: 'Support' }]
            })

            console.log(`RPC enabled: ${this.user?.id}`)
        })
    }
}