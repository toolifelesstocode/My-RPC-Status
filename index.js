const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "An idiot who codes.",
        state: "I make RimBot and Bot for only myself.",
        startTimestamp: new Date(),
        largeImageKey: "sham",
        largeImageText: "Sham",
        smallImageKey: "rb",
        smallImageText: "RimBot",
        buttons : [{label : "Invite" , url : "https://rimbot.xyz/invite/"},{label : "Website" , url : "https://rimbot.xyz/"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '886912056366891068'
})