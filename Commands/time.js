module.exports.config = {
  name: "time"
};
module.exports.run = function({ api, event }) {
  const now = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  api.sendMessage(`🕰️ Current time: ${now}`, event.threadID, event.messageID);
};