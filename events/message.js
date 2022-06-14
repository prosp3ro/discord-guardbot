const Discord = require('discord.js')
const config = require('../config/config.json')
const prefix = config.prefix

module.exports = async (client, message) => {
    // message author is bot
    if (message.author.bot) return

    // message not sent on the server
    if (!message.guild) return

    // message not starting from prefix
    if (!message.content.startsWith(prefix)) return

    if (!message.member) message.member = await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    const cmd = client.commands.get(command)
    if (!cmd) return

    cmd.run(client, message, args)
}
