const { RichEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    category: "info",
    run: async (client, message, args) => {

        let embed1 = new RichEmbed()
        .setAuthor(`|  Pinging...`, message.author.displayAvatarURL)
        .setColor("#ff00c3")

        let embed2 = new RichEmbed()
        .setAuthor(`|  Ping: ${Math.round(client.ping)}ms`, message.author.displayAvatarURL)
        .setColor("#ff00c3")

        const msg = await message.channel.send(embed1);
        msg.edit(embed2);

    }
}
