module.exports.config = {
  name: "owner"
};
module.exports.run = function({ api, event }) {
  api.sendMessage("👑 Bot Owner: Mohit\nFacebook: fb.com/mohit.rajput\nTelegram: @mohitrajput", event.threadID, event.messageID);
};