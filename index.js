const Discord = require('discord.js');
const client = new Discord.Client();
const alexa = new require('alexa-bot-api');
var chatbot = new alexa('aw2plm');

client.once("ready", () => {
    console.log('🌌| Milchstraße Chat wurde gestartet!');

client.on("message", async message => {
  if (message.channel.id == '823337314507554856') {
    if (message.author.bot) return;
      let content = message.content;
        if(!content) return;
            chatbot.getReply(content).then(r => message.channel.send(r));
        }
    });
});

client.login('ODIzMzMxNDM2NDU4MTQ3ODgw.YFfRJw.R3QzZiJoqV_sig-pB7LjLARTpC8');
