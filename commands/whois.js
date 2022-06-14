// Info

const { RichEmbed } = require('discord.js')
const { getMember, formatDate } = require('../functions.js')
const { stripIndents } = require('common-tags')

exports.run = async (client, message, args) => {
    const member = getMember(message, args.join(" "))
    const joined = formatDate(member.joinedAt)
    const role = member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(", ") || "None"

    const created = formatDate(member.user.createdAt)

    const embed = new RichEmbed()
        .setFooter(member.displayName, member.user.displayAvatarURL)
        .setThumbnail(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)
        .addField('**Member information**', stripIndents`**Name on the server:** ${member.displayName}
        **Joined:** ${joined}
        **Role:** ${role}`, true)
        .addField('**User information**', stripIndents`**ID:** ${member.user.id}
        **Name:** ${member.user.username}
        **Tag:** ${member.user.tag}
        **Account creation date:** ${created}`, true)
        .setTimestamp()

    if (member.user.presence.game)
        embed.addField('**In game**', `${member.user.presence.game.name}`)

    message.channel.send(embed)
}
