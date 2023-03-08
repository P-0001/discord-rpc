import { Client } from "../src/index";

const client = new Client({
    clientId: process.env["CLIENT_ID"] || "123456789012345678",
    transport: {
        throwConnectError: false,
        onError: function (err) {
            console.error("onError", err);
        }
    }
});

client.on("ready", async () => {
    await client.user?.setActivity({
        state: "Suffering with my life",
        details: "Pain and Suffering",
        startTimestamp: Date.now(),
        largeImageKey: "main",
        largeImageText: "me irl"
    });
});
async function start() {
    try {
        // using connect instead of login becurse no login scope
        await client.connect();
    } catch (e) {
        console.error("catch", e);
    }
}

start();
