require("dotenv").config();
const https = require("https");
const fs = require("fs");
const TeleBot = require("node-telegram-bot-api");
const { rules, characters } = require("./constants");
const port = 3000;

const { TOKEN, GROUP_ID } = process.env;

const server = https.createServer();

let participants = [];
let characterInGame = [];

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

server.listen(port, () => {
  // initial bot
  const bot = new TeleBot(TOKEN, {
    polling: true,
  });

  bot.onText(/\/newgame/, (msg) => {
    participants = [];
    characterInGame = [];
    bot.sendMessage(
      msg.chat.id,
      `Game mới bắt đầu. Mọi người hãy bấm vào nút "Join"`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Join", switch_inline_query_current_chat: "/join" }],
          ],
        },
      }
    );
  });

  bot.onText(/\/(start|start\sxxx)$/, ({ chat }) => {
    bot.sendMessage(chat.id, `Are you ready?`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Ready", switch_inline_query_current_chat: "/ready" }],
        ],
      },
    });
  });

  bot.on("inline_query", ({ id, query, from }) => {
    if (query === "/join") {
      bot.answerInlineQuery(id, [], {
        switch_pm_text: "Start with bot",
        switch_pm_parameter: "xxx",
        cache_time: 0,
      });
    }
    if (query === "/ready") {
      participants.push(from.id);
      bot
        .answerInlineQuery(
          id,
          [
            {
              id: uuidv4(),
              type: "article",
              title: "Sẵn sàng",
              input_message_content: {
                message_text: "Tôi đã sẵn sàng",
              },
            },
          ],
          { cache_time: 0 }
        )
        .then(
          (val) =>
            val &&
            bot.sendMessage(
              GROUP_ID,
              `${from.first_name} ${from.last_name} đã sẵn sàng`,
              {
                parse_mode: "HTML",
              }
            )
        );
    }
  });

  bot.onText(/\/startgame/, (msg) => {
    if (participants.length < 8) {
      bot.sendMessage(
        msg.chat.id,
        "Không thể bắt đầu game vì cần tối thiểu 8 người chơi"
      );
    } else {
      const rule = rules[participants.length];
      Object.keys(rule).map((key) => {
        console.log(key);
        characterInGame = characterInGame.concat(Array(rule[key]).fill(key));
      });
      characterInGame = characterInGame.sort(
        () => Math.random() - Math.random()
      );
      console.log(characterInGame);
      console.log(participants);
      participants
        .sort(() => Math.random() - Math.random())
        .map((id, index) => {
          const myCharacter = characters[characterInGame[index]];
          bot.sendPhoto(id, myCharacter.image, {
            parse_mode: "HTML",
          });
          bot.sendMessage(
            id,
            `<b>Tên:</b> ${myCharacter.name}\n${myCharacter.description}`,
            {
              parse_mode: "HTML",
            }
          );
        });
    }
  });

  console.log(`Server running`);
});
