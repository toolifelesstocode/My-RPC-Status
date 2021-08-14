const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "A Multi-Purpose Discord Bot",
        state: "Trusted in 78 Servers.",
        startTimestamp: new Date(),
        largeImageKey: "rimbot",
        largeImageText: "RimBot",
        smallImageKey: "pfp",
        smallImageText: "Almost at 100 servers!",
        buttons : [{label : "Invite" , url : "https://rimbot.xyz/invite/"},{label : "Website" , url : "https://rimbot.xyz/"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '827291056738402316'
})