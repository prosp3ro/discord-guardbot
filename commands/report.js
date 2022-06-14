// Other

// .then(m => m.delete(3000))

const { RichEmbed } = require('discord.js')
const { stripIndents } = require('common-tags')

exports.run = async (client, message, args) => {
    message.delete()

    const channel = message.guild.channels.find(channel => channel.name === "reports")
    if (!channel) return message.channel.send('Channel \`#reports` was not found! Create it first.')

    let rMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!rMember) return message.channel.send(`User not found. <@${message.member.id}>`)
    if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot) return message.channel.send(`You can't report server admin! <@${message.member.id}>`)
    if (!args[1]) return message.channel.send(`Reason is required! <@${message.member.id}>`)

    const embed = new RichEmbed()
        .setColor('#eb4034')
        .setThumbnail(rMember.user.displayAvatarURL)
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL)
        .setTitle("**Report**", rMember.user.displayAvatarURL)
        .setDescription(stripIndents`**User:** ${rMember}
        **Reported by:** ${message.member}
        **From channel:** ${message.channel}
        **Reason:** ${args.slice(1).join(" ")}`, true)

    channel.send(embed)
}
