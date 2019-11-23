const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    let creditsEmbed = new RichEmbed()
    .setAuthor(' | Credits', message.author.displayAvatarURL)
    .setColor('#ff00c3')
    .addField('Developers', 'TotallyNotMayhem#0001\nTotallyNotArchie#0001')
    .setFooter('Requested by ' + message.author.tag + ' (' + message.author.id + ')')
    .setTimestamp()

    message.channel.send(creditsEmbed)

};

exports.help = {
    name: 'credits'
};