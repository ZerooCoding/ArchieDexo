const { RichEmbed } = require('discord.js');
const { getMember, formatDate } = require("../../functions.js");

exports.run = async (client, message, args) => {

const member = getMember(message, args.join(" "));

    let avEmbed = new RichEmbed()
    .setAuthor(' | Avatar', message.author.displayAvatarURL)
    .setDescription('This is ' + member.user.tag + '\'s avatar!')
    .setColor('#ff00c3')
    .setImage(member.user.displayAvatarURL)
    .setFooter('Requested by ' + message.author.tag + ' (' + message.author.id + ')')
    .setTimestamp()

    message.channel.send(avEmbed)

};

exports.help = {
    name: 'avatar'
};