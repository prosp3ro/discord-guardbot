// Info

const { RichEmbed } = require('discord.js')
const config = require('../config/config.json')
const { stripIndents } = require('common-tags')
const prefix = config.prefix

exports.run = (client, message, args) => {
    if (message.content === `${prefix}help`) {
        const embed = new RichEmbed()
            .setColor("#FFD500")
            .setTitle(':star: Commands category')
            .addField(':tools: Moderation', '`.help moderation`\n `.help mod`', true)
            .addField(':mailbox: Information', '`.help info`\n ', true)
            .addField(':gear: Other', '`.help inne`', true)
            .setFooter('Bot created by prospero.')
            // .setFooter(message.guild.name, message.guild.iconURL)
            .setTimestamp()
        message.channel.send(embed)
    }

    else if (message.content === `${prefix}help mod` || message.content === `${prefix}help moderation`) {
        const embed = new RichEmbed()
            .setTitle(':tools: Moderation')
            .setColor("RANDOM")
            .setDescription(stripIndents`Commands intended for administration only. \n
            \`.ban\` - ban <@user> <reason> \n
            \`.clear\` - clear <number of messages> \n
            \`.kick\` - kick <@user> <reason> \n
            \`.mute\` - mute <@user> (time = [x]s/m/h/d) \n
            \`.ping\` - latency between bot and server \n
            \`.unmute\` - unmute <@user> \n
            \`.warn\` - warn <@user> <reason> \n`)
            .setFooter('remember about using prefix before each command')
        message.channel.send(embed)
    }

    else if (message.content === `${prefix}help info` || message.content === `${prefix}help information`) {
        const embed = new RichEmbed()
            .setTitle(':mailbox: Information')
            .setColor("RANDOM")
            .setDescription(stripIndents` \`.avatar\` - avatar <@user> \n
            \`.botinfo\` \n
            \`.channelinfo\` \n
            \`.servericon\` \n
            \`.serverinfo\` \n
            \`.whoami\` - shows information about message author. \n
            \`.whois\` - whois <@user>`)
            .setFooter('remember about using prefix before each command')
        message.channel.send(embed)
    }

    else if (message.content === `${prefix}help other`) {
        const embed = new RichEmbed()
            .setTitle(':gear: Other commands')
            .setColor("RANDOM")
            .setDescription(stripIndents` \`.instagram\` - instagram <account> \n
            \`.report\` - report a user, report <@user> <reason> \n
            \`.uptime guard\` - for how long bot is online. \n`)
            .setFooter('remember about using prefix before each command')
        message.channel.send(embed)
    }
}
