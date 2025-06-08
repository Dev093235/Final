module.exports.config = {
  name: "ping"
};
module.exports.run = function({ api, event }) {
  const time = Date.now();
  api.sendMessage("🏓 Pong!", event.threadID, () => {
    const latency = Date.now() - time;
    api.sendMessage(`⏱️ Latency: ${latency}ms`, event.threadID);
  });
};