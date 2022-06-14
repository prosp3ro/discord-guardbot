// Info

const Discord = require("discord.js")
const { formatDate } = require('../functions.js')
const config = require('../config/config.json')
const author = config.author
const version = config.version

exports.run = async (client, message, args) => {
    const created = formatDate(client.user.createdAt)

    const embed = new Discord.RichEmbed()
        .setTitle("Bot information")
        .setColor("#15f153")
        .setThumbnail(client.user.displayAvatarURL)
        .addField("**Bot name**", client.user.username)
        .addField("**Created**", created)
        .addField("**Author**", `${author}`)
        .addField("**Version**", `${version}`)
        .setImage(client.user.displayAvatarURL)

    message.channel.send(embed)
}
