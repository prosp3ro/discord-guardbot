// Info

const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    let target = message.mentions.users.first() || message.author

    const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`User avatar ${target.tag}`)
        .setImage(target.displayAvatarURL)
        .setFooter(message.member.displayName, message.member.user.displayAvatarURL)
        .setTimestamp()

    message.channel.send(embed)
}
