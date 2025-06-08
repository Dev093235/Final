module.exports.config = {
  name: "birthday"
};
module.exports.run = function({ api, event }) {
  api.sendMessage("🎉 Happy Birthday to you! 🥳 May your life be full of happiness and success!", event.threadID, event.messageID);
};