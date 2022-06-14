// Info

const { RichEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
    if (!message.guild.iconURL) return message.channel.send("Server has no icon.")

    const embed = new RichEmbed()
        .setTitle(`Server icon`)
        .setImage(message.guild.iconURL)
        .setFooter(message.member.user.username, message.member.user.displayAvatarURL)
        .setTimestamp()

    message.channel.send(embed)
}
