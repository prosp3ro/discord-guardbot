const fs = require('fs')
const chalk = require('chalk')

module.exports = client => {
    console.log(chalk.green(`Bot is online.`)) // ${client.user.username}
    // "In game ___"
    // client.user.setActivity('Server Name | .help')

    client.user.setPresence({
        status: "online",
        game: {
            name: ".help",
            type: "LISTENING"
        }
    })
}
