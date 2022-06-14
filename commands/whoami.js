// Info

const { RichEmbed } = require('discord.js')
const { stripIndents } = require('common-tags')
const { formatDate } = require('../functions.js')

exports.run = async (client, message, args) => {
    const date = message.author.createdAt
    const newDate = date.toLocaleDateString()
    const joined = formatDate(message.member.joinedAt)

    const role = message.member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(", ") || "None"

    const embed = new RichEmbed()
        .setFooter(message.member.displayName, message.member.user.displayAvatarURL)
        .setThumbnail(message.member.user.displayAvatarURL)
        .setColor(message.member.displayHexColor === "#000000" ? "#ffffff" : message.member.displayHexColor)
        .addField('**Member info**', stripIndents`**Name on the server:** ${message.member.displayName}
        **Joined:** ${joined}
        **Role:** ${role}`, true)
        .addField('**User info**', stripIndents`**ID:** ${message.member.user.id}
        **Name:** ${message.member.user.username}
        **Tag:** ${message.member.user.tag}
        **Account creation date:** ${newDate}`, true)
        .setTimestamp()

    if (message.member.user.presence.game)
        embed.addField('**In game**', `${message.member.user.presence.game.name}`)

    message.channel.send(embed)
}
