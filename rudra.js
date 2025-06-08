const login = require("fca-unofficial");
const fs = require("fs");

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf-8"));

login({ appState }, (err, api) => {
  if (err) return console.error("❌ Login failed:", err);

  console.log("✅ Rudra Bot is online!");

  api.listenMqtt((err, message) => {
    if (err) return console.error("❌ Listen Error:", err);

    console.log(`📥 Message from ${message.senderID}: ${message.body}`);
    api.sendMessage("🔄 Auto-response: Message received!", message.threadID);
  });

  setTimeout(() => {
    console.log("🕒 Rudra shutting down after 6 hours.");
    process.exit(0);
  }, 1000 * 60 * 360); // 6 hours
});
