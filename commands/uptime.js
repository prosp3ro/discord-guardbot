// Other

const Discord = require('discord.js');
const config = require('../config/config.json')
const prefix = config.prefix

exports.run = async (client, message, args) => {
    let days = 0;
    let week = 0;

    if (message.content === `${prefix}uptime guard`) {
        let uptime = ``;
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        if (hours > 23) { days = days + 1; hours = 0; }
        if (days == 7) { days = 0; week = week + 1; }
        if (week > 0) { uptime += `${week} week, `; }
        if (minutes > 60) { minutes = 0; }

        uptime += `${days} days, ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s).`;

        let serverembed = new Discord.RichEmbed()
            .setColor("DARK_BLUE")
            .setTitle('Guard')
            .setDescription(`Bot is online for ${uptime}`);

        message.channel.send(serverembed);
  }
}
