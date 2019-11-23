const { RichEmbed } = require("discord.js");

module.exports = {
    name: "support",
    category: "info",
    run: async (client, message, args) => {
        message.channel.send('Need support? Join our support server: <https://discord.gg/4k5UZ6E>.')

    }
}
