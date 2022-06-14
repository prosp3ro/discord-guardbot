// Moderation

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You are not authorized to use this command! <@${message.member.id}>`)

    const msg = await message.channel.send(":ping_pong: Pinging...")
    msg.edit(`API Latency: \`${Math.round(client.ping)}ms\`.`)
}
