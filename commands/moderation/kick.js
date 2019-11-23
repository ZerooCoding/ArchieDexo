const { RichEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("KICK_MEMBERS") || (!message.author.id === "596879758244053002")) return message.channel.send("You do not have permission to run `kick`.");

        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send(`Invalid usage! \`kick <user> <reason>\`.`)
        let kReason = args.join(" ").slice(22);

        let embed = new RichEmbed()
        .setTitle('Kick')
        .setColor('#ed4337')
        .addField('User', `<@${kUser.id}>`, true)
        .addField('Moderator', `<@${message.author.id}>`, true)
        .addField('Reason', `${kReason}`, true)
        .setFooter('ID: ' + kUser.id)
        .setTimestamp()

        let logChannel = message.guild.channels.find('name', 'mod-log');
        if(!logChannel) return message.channel.send('<:ayoError:635085861960155150> Please create a channel called `mod-log` and try again.')
        message.guild.member(kUser).kick(kReason);
        kUser.send(`You have been kicked from ${message.guild.name} for ${kReason}.`)
        message.channel.send(`<:ayoSuccess:635085783719608330> Successfully kicked ${kUser.user.tag}.`)
        logChannel.send(embed);
    }
}
