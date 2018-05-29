const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

require('events').EventEmitter.prototype._maxListeners = 100;

client.on("message", (message) => {
  if (message.content.toLowerCase() === "City Cab") {
    message.channel.send("Czy chodziło Ci o City Cab Corporation? https://abload.de/img/belkalok44up3.png");
  }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Aspire Workshop") {
      message.channel.send("Czy chodziło Ci o Aspire Workshop? https://i.imgur.com/DtWYLML.png");
    }
});




client.login("NDQ4NTI4NDQ4MzIzOTc3MjI2.DeXcLw.jxtI6-JzOF7VOdqzBmOJ_S1KGoU");
