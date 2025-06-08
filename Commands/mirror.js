module.exports.config = {
  name: "mirror"
};
module.exports.run = function({ api, event, args }) {
  const msg = args.join(" ").split("").reverse().join("");
  api.sendMessage(msg || "🔄 No text to mirror!", event.threadID, event.messageID);
};