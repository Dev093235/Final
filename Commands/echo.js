module.exports.config = {
  name: "echo"
};
module.exports.run = function({ api, event, args }) {
  const msg = args.join(" ");
  api.sendMessage(msg || "📢 You didn't say anything to echo!", event.threadID, event.messageID);
};