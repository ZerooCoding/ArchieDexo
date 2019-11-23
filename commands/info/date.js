const { RichEmbed } = require("discord.js");

module.exports = {
    name: "date",
    category: "info",
    run: async (client, message, args) => {

    let avEmbed = new RichEmbed()
    .setAuthor(' | Date', message.author.displayAvatarURL)
    .setDescription('Today\'s date is ' + message.createdAt + '.')
    .setColor('#ff00c3')
    .setFooter('Requested by ' + message.author.tag + ' (' + message.author.id + ')')
    .setTimestamp()

    message.channel.send(avEmbed)
    }
}