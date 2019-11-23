const { formatDate } = require("../../functions.js");
const { RichEmbed } = require("discord.js");
const config = require("../../config.js");

module.exports = {
    name: "help",
    category: "info",
    run: async (client, message, args) => {

        const embed = new RichEmbed()
            .setAuthor('| Dexo Help', message.author.displayAvatarURL)
            .setColor("#ff00c3")
            .setDescription(`This guild's prefix: ${config.settings.prefix}`)

            .addField('Information', '`help`, `invite`, `ping`, `stats`, `support`, `date`, `serverinfo`, `whois`')
            .addField('Moderation', '`ban`, `clear`, `kick`, `mute`, `say`',)
            .addField('Settings', '`setprefix`', )
            .addField('Fun', '`meme`, `avatar`, `credits`, ~~`rps`~~, `love`', )
            .setFooter(`Requested by ${message.author.tag} (${message.author.id})`)
            .setTimestamp()

                message.channel.send(embed);
    }
}
