# 🤖 Mirai FB Messenger Bot

A simple Facebook Messenger chatbot like Mirai using `fca-unofficial`.
Login via Facebook cookies (`appstate.json`) and reply to commands like `!hi`, `!help`, `!joke`, etc.

## 🚀 Features
- Login via cookies (no email/pass required)
- Easy command system via `commands/`
- Works with personal FB ID
- Time, Ping, Jokes, Mirror, UID & more

## 📦 Install
```bash
npm install
node index.js
```

## 🔐 Login Setup
Paste your Facebook `appstate.json` into the root folder.

Use this Chrome Extension to get appstate:
👉 [Get FB Cookie](https://chrome.google.com/webstore/detail/get-cookie-fb/oclkhnpgpnjfdmenmfbjegacdoihncdc)

## 📚 Commands
| Command | Description            |
|---------|------------------------|
| !hi     | Greet the user         |
| !help   | List available commands|
| !joke   | Send desi jokes        |
| !time   | Show current time      |
| !uid    | Show your UID          |
| !ping   | Ping the bot           |
| !love   | Show love message      |
| !mirror | Reverse your message   |
| !birthday | Send birthday wishes |
| !echo   | Repeat your message    |
| !info   | Bot info               |
| !owner  | Bot owner's info       |

## 🙏 Credits
Made with ❤️ by Mohit | Powered by [fca-unofficial](https://www.npmjs.com/package/fca-unofficial)