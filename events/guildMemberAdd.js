// New users on the server.
// Automatically assigning user roles.

const { RichEmbed } = require('discord.js')
const { stripIndents } = require('common-tags')

module.exports = (client, member) => {
    // Channel name for notifications.
    let userLogs = member.guild.channels.find(c => c.name === 'user-logs')

    const date = member.user.createdAt
    const newDate = date.toLocaleDateString()

    // const embed = new RichEmbed()
        //   .setTitle('**New user!**')
        //   .addField('**Name**', member.user.username)
        //   .addField('**ID**', `${member.user.id}`)
        //   .addField('**Discord tag**', `${member.user.tag}`)
        //   .addField('**Account creation date**', newDate)
        //   .setColor('#03fc49')
        //   .setTimestamp()
        //   .setThumbnail(member.user.displayAvatarURL)
        //   .setFooter(member.displayName, member.user.displayAvatarURL)

    // userLogs.send(embed)

    const embed = new RichEmbed()
        .setTimestamp()
        .setColor('GREEN')
        .setThumbnail(member.user.displayAvatarURL)
        .setFooter(member.displayName, member.user.displayAvatarURL)
        .addField('**New user!**', stripIndents`
        **Name:** ${member.user.username}
        **ID:** ${member.user.id}
        **Discord tag:** ${member.user.tag}
        **Account creation date:** ${newDate}`)

    userLogs.send(embed)
}
