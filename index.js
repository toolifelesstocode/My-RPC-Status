const { Client } = require('discord-rpc')
const rpc = new Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "eZaR Simulator 2022",
        state: "The new Discord Multi-Bot.",
        largeImageKey: "ezar_blurple",
        largeImageText: "eZaR",
        smallImageKey: "ezar_green",
        smallImageText: "amaze bot",
        buttons: [{ label: "Website", url: "https://ezar.shamdev.xyz/" }, { label: "Support Server", url: "https://discord.gg/2Usu8E5KK4" }]
    })

    console.log("RPC is on.")
})

rpc.login({
    clientId: '906816722676371496'
})