const { RichEmbed } = require("discord.js");

module.exports = {
    name: "stats",
    category: "info",
    run: async (client, message, args) => {

        function duration(ms) {
            const secs = Math.floor((ms / 1000) % 60).toString()
            const mins = Math.floor((ms / (1000 * 60)) % 60).toString()
            const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
            const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
            return `${days.padStart(1, '0')} days, ${hrs.padStart(1, '0')} hours, ${mins.padStart(1, '0')} minutes and ${secs.padStart(1, '0')} seconds`
        }

        let embed = new RichEmbed()
        .setAuthor('| Dexo Stats', message.author.displayAvatarURL)
        .setColor('#ff00c3')
        .addField('Total Guilds', client.guilds.size)
        .addField('Total Users', client.users.size)
        .addField('Uptime', duration(client.uptime))
        
        message.channel.send(embed);

    }
}
