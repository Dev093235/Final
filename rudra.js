/**
 * Rudra Bot by Mohit 🛡️
 * Final working version using appstate.json
 */

const fs = require("fs");
const login = require("fca-unofficial");

// ✅ Step 1: Check if appstate.json exists
if (!fs.existsSync("./appstate.json")) {
  console.log("❌ appstate.json not found! Please paste your Facebook cookies in appstate.json file.");
  process.exit(1);
}

// ✅ Step 2: Load and parse cookies
let appState;
try {
  appState = JSON.parse(fs.readFileSync("./appstate.json", "utf8"));
} catch (e) {
  console.error("❌ Error reading appstate.json:", e.message);
  process.exit(1);
}

// ✅ Step 3: Login using cookies
login({ appState }, (err, api) => {
  if (err) {
    console.error("❌ Facebook login failed:", err.error || err);
    return;
  }

  console.log("✅ Rudra Bot Started Successfully! 🔥");

  // Bot logic here
  api.setOptions({ listenEvents: true });

  const stopListening = api.listenMqtt((err, event) => {
    if (err) return console.error("❌ Listener error:", err);

    // Example: auto-reply to message
    if (event.type === "message" && event.body) {
      const reply = `👋 Hello ${event.senderID}, you said: ${event.body}`;
      api.sendMessage(reply, event.threadID);
    }
  });
});
