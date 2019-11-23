const { RichEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    category: "info",
    run: async (client, message, args) => {
        message.channel.send('Invite Dexo here: <https://discordapp.com/oauth2/authorize?client_id=639944909281034242&scope=bot&permissions=437775454>.')

    }
}
