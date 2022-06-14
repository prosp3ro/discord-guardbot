// Other

const { RichEmbed } = require("discord.js")
const { stripIndents } = require("common-tags")
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
    const name = args.join(" ")
    if (!name) return message.reply("Enter username.")

    const url = `https://instagram.com/${name}/?__a=1`

    let res

    try {
        res = await fetch(url).then(url => url.json())
    }
    catch (e) {
        return message.channel.send(`Username not found. <@${message.author.id}>`)
    }

    const account = res.graphql.user;

    const embed = new RichEmbed()
        .setColor("BLUE")
        .setTitle(account.full_name)
        .setURL(`https://instagram.com/${name}`)
        .setFooter(message.member.displayName, message.member.user.displayAvatarURL)
        .setThumbnail(account.profile_pic_url_hd)
        .addField("Profile information", stripIndents`**Name:** ${account.username}
        **Full name:** ${account.full_name}
        **Bio:** \n\`${account.biography.length == 0 ? "None" : account.biography}\`
        **Posts:** ${account.edge_owner_to_timeline_media.count}
        **Following:** ${account.edge_followed_by.count}
        **Followers:** ${account.edge_follow.count}
        **Private account:** ${account.is_private ? "Yes 🔐" : "No 🔓"}`)

    message.channel.send(embed)
}
