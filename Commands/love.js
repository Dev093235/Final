module.exports.config = {
  name: "love"
};
module.exports.run = function({ api, event }) {
  api.sendMessage("💖 You’re loved! Keep smiling 😘", event.threadID, event.messageID);
};