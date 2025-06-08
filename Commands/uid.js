module.exports.config = {
  name: "uid"
};
module.exports.run = function({ api, event }) {
  api.sendMessage(`🆔 Your UID: ${event.senderID}`, event.threadID, event.messageID);
};