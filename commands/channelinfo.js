// Info

const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    const channel = message.channel || message.guild.channels.get(args[0])
    const date = channel.createdAt
    const newDate = date.toLocaleDateString()

    const channelEmbed = new RichEmbed()
        .setColor(0x00AE86)
        .setThumbnail(message.guild.iconURL)
        .setTitle('Channel information')
        .addField(':arrow_right: **Name**', `<#${channel.id}>`, true)
        .addField(':arrow_right: **Channel ID**', channel.id, true)
        .addField(':arrow_right: **Created**', newDate, true)
        .addField(':arrow_right: **NSFW**', channel.nsfw ? ':white_check_mark:' : ':x:', true)
        .addField(':arrow_right: **Category**', channel.parent ? channel.parent.name : 'None', true)
        .addField(':arrow_right: **Type**', channel.type, true)
        .addField(':arrow_right: **Description**', channel.topic || 'None', true)
        .setFooter(message.guild.name, message.guild.iconURL)
        .setTimestamp()

    message.channel.send(channelEmbed);
}
