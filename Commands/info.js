module.exports.config = {
  name: "info"
};
module.exports.run = function({ api, event }) {
  api.sendMessage("🤖 This bot is Mirai-style and made with ❤️ by Mohit\nUse `!help` to see all commands.", event.threadID, event.messageID);
};