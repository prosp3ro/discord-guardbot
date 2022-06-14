// Info

const { RichEmbed } = require("discord.js")
const { formatDate } = require('../functions.js')

exports.run = async (client, message, args) => {
    const created = formatDate(message.guild.createdAt)
    const joined = formatDate(message.member.joinedAt)

    const embed = new RichEmbed()
        .setTitle("Server information")
        .setColor("#15f153")
        .setThumbnail(message.guild.iconURL)
        .addField("**Name**", message.guild.name)
        .addField("**Creation date**", created)
        .addField("**You joined**", joined)
        .addField("**Number of users**", message.guild.memberCount)
        .setImage(message.guild.iconURL)

    message.channel.send(embed)
}
