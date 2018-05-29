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

client.on("message", (message) => {
    if (message.content.toLowerCase() === "UFC Gym") {
      message.channel.send("Czy chodziło Ci o UFC Gym? https://i.imgur.com/8X0C07B.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Forwood Fitness Center") {
      message.channel.send("Czy chodziło Ci o Forwood Fitness Center? https://i.imgur.com/pNwQhVA.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "FFC") {
      message.channel.send("Czy chodziło Ci o Forwood Fitness Center? https://i.imgur.com/pNwQhVA.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Adrenaline Fitness Club") {
      message.channel.send("Czy chodziło Ci o Adrenaline Fitness Club? https://cdn.discordapp.com/attachments/440640753543413761/444038744803246100/mta-screen_2018-05-10_09-22-41.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Crystal Bet") {
      message.channel.send("Czy chodziło Ci o Crystal Bet? https://i.imgur.com/uyYh1GD.jpg");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Fighters Gym") {
      message.channel.send("Czy chodziło Ci o Fighters Gym? https://i.imgur.com/hZtyv2U.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Spot Miami") {
      message.channel.send("Czy chodziło Ci o Spot Miami? http://i.imgur.com/YuVZ1Cm.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Santos Taxi") {
      message.channel.send("Czy chodziło Ci o Santos Taxi? http://i.imgur.com/FJQe3Ng.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Santos Car Dealer") {
      message.channel.send("Czy chodziło Ci o Spot Santos Car Dealer? https://i.imgur.com/w1QzA7V.png");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "The Well Stacked Pizza") {
      message.channel.send("Czy chodziło Ci o The Well Stacked Pizza? https://vignette.wikia.nocookie.net/gta/images/0/0b/The_Well_Stacked_Pizza_Co._%28SA_-_Idlewood%29.jpg/revision/latest?cb=20111130180844&path-prefix=pl");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "TWSP") {
      message.channel.send("Czy chodziło Ci o The Well Stacked Pizza? https://vignette.wikia.nocookie.net/gta/images/0/0b/The_Well_Stacked_Pizza_Co._%28SA_-_Idlewood%29.jpg/revision/latest?cb=20111130180844&path-prefix=pl");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Elite Security") {
      message.channel.send("Czy chodziło Ci o Elite Security? http://i66.tinypic.com/xbws3p.jpg");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Greeneye Bar") {
      message.channel.send("Czy chodziło Ci o Greeneye Bar? https://imgur.com/xhbmO5n.png (Idlewood)");
    }
});

client.on('message', message => {

  if(message.content.toLowerCase() === 'Rode Garage')
      message.channel.send('Czy chodziło Ci o Rode Garage? https://i.imgur.com/TJMGI5V.jpg (Idlewood naprzeciwko The Well Stacked Pizza)');
  
  else if(message.content.toLowerCase() === 'Liberty State Delivery')
      message.channel.send('Czy chodziło Ci o Liberty State Delivery? https://images-ext-1.discordapp.net/external/dZSyZkjU8kWiCHnUkmC34vtiggNZZdcvEn2Tea4jL5I/https/i.imgur.com/qGyjeFt.png?width=1052&height=592 (El Corona)');
  
  else if(message.content.toLowerCase() === 'Quantum')
      message.channel.send('Czy chodziło Ci o Quantum? https://images-ext-2.discordapp.net/external/xj8Jm5NPbu9Omos2TuvxzOLb8jV9StjHH7WKr4hXtQs/https/i.imgur.com/kZWKPynr.png?width=960&height=240 (Aleja Gwiazd)');
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Texas Casino") {
      message.channel.send("Czy chodziło Ci o Texas Casino? https://i.imgur.com/bePrhLZ.png (Idlewood)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Comrades Bar") {
      message.channel.send("Czy chodziło Ci o Comrades Bar? https://cdn.discordapp.com/attachments/322018533774983169/423890854646906880/lokalizacja.png (Market)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Superchargered Logistics Services") {
      message.channel.send("Czy chodziło Ci o Superchargered Logistic Services lub Superchargered Leviathan Performance? Obydwa miejsca znajdują się tutaj https://i.imgur.com/lF0hHc5.png (Pomiedzy urzedem a idlewood)");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "Superchargered Leviathan Performance") {
    message.channel.send("Czy chodziło Ci o Superchargered Logistic Services lub Superchargered Leviathan Performance? Obydwa miejsca znajdują się tutaj https://i.imgur.com/lF0hHc5.png (Pomiedzy urzedem a idlewood)");
  }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "SLS") {
      message.channel.send("Czy chodziło Ci o Superchargered Logistic Services lub Superchargered Leviathan Performance? Obydwa miejsca znajdują się tutaj https://i.imgur.com/lF0hHc5.png (Pomiedzy urzedem a idlewood)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "SLP") {
      message.channel.send("Czy chodziło Ci o Superchargered Logistic Services lub Superchargered Leviathan Performance? Obydwa miejsca znajdują się tutaj https://i.imgur.com/lF0hHc5.png (Pomiedzy urzedem a idlewood)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Champions Gym") {
      message.channel.send("Czy chodziło Ci o Champions Gym? http://i.imgur.com/kI4u8I1.png (Idlewood)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Los Santos Auto Repairs") {
      message.channel.send("Czy chodziło Ci o Los Santos Auto Repairs? https://cdn.discordapp.com/attachments/301843842636972033/405067021202751488/lokoloko.jpg (Market))");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Just Donuts") {
      message.channel.send("Czy chodziło Ci o Just Donuts!? https://i.imgur.com/3lUQ4Pj.png (Market)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Reynolds Lo-Lo Garage") {
      message.channel.send("Czy chodziło Ci o Reynolds Lo-Lo Garage? https://i.imgur.com/zqjQSfZ.png (Idlewood)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Raw Meat") {
      message.channel.send("Czy chodziło Ci o Raw Meat? http://i.imgur.com/7GuahPn.png (Za urzedem w lewo)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Gold's Cars") {
      message.channel.send("Czy chodziło Ci o Golds Cars lub Golds Casino? Golds Cars: https://i.imgur.com/ezG6hGY.jpg (Market) / Golds Casino: http://i.imgur.com/OAv2beF.png (aleja gwiazd)");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "Gold's Casino") {
    message.channel.send("Czy chodziło Ci o Golds Cars lub Golds Casino? Golds Cars: https://i.imgur.com/ezG6hGY.jpg (Market) / Golds Casino: http://i.imgur.com/OAv2beF.png (aleja gwiazd)");
  }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "Golds Casino") {
    message.channel.send("Czy chodziło Ci o Golds Cars lub Golds Casino? Golds Cars: https://i.imgur.com/ezG6hGY.jpg (Market) / Golds Casino: http://i.imgur.com/OAv2beF.png (aleja gwiazd)");
  }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "Golds Casino") {
    message.channel.send("Czy chodziło Ci o Golds Cars lub Golds Casino? Golds Cars: https://i.imgur.com/ezG6hGY.jpg (Market) / Golds Casino: http://i.imgur.com/OAv2beF.png (aleja gwiazd)");
  }
});


client.on("message", (message) => {
    if (message.content.toLowerCase() === "Creative Vehicle") {
      message.channel.send("Czy chodziło Ci o Creative Vehicle? https://cdn.discordapp.com/attachments/436529245565485056/436949960731131916/mapka.png (obok FBI)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "LSTS") {
      message.channel.send("Czy chodziło Ci o Los Santos Transport System / Taxi Group? https://i.gyazo.com/508b4cd5c82d30fc355a1c4c5ff08028.jpg (Unity Station)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "Los Santos Transport System") {
      message.channel.send("Czy chodziło Ci o Los Santos Transport System / Taxi Group? https://i.gyazo.com/508b4cd5c82d30fc355a1c4c5ff08028.jpg (Unity Station)");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "Los Santos Taxi Group") {
    message.channel.send("Czy chodziło Ci o Los Santos Transport System / Taxi Group? https://i.gyazo.com/508b4cd5c82d30fc355a1c4c5ff08028.jpg (Unity Station)");
  }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "C&C Bar") {
      message.channel.send("Czy chodziło Ci o C&C Bar? https://cdn.discordapp.com/attachments/379755568899817483/413049188914298890/unknown.png (Idlewood)");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase() === "C&C Logistics") {
      message.channel.send("Czy chodziło Ci o C&C Logistics? https://cdn.discordapp.com/attachments/379755568899817483/409703284664827904/unknown.png (Market, hangary filmowe)");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() === "Gala UFC") {
      message.channel.send("Chodziło Ci może o Galę UFC? https://i.imgur.com/qmwbgz2.png (aleja gwiazd)");
    }
});



client.login("NDQ4NTI4NDQ4MzIzOTc3MjI2.DeXcLw.jxtI6-JzOF7VOdqzBmOJ_S1KGoU");
