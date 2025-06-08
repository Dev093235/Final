module.exports.config = {
  name: "joke"
};
module.exports.run = function({ api, event }) {
  const jokes = [
    "😹 Master: Class mein sabse intelligent kaun hai?\nPappu: Camera 🎥",
    "🤣 Teacher: 1 aur 1 kitne?\nStudent: Sir ek bhi kam ho toh zindagi adhoori hai 😌"
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  api.sendMessage(joke, event.threadID, event.messageID);
};