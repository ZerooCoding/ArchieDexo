const { RichEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS") || (!message.author.id === "596879758244053002")) return message.channel.send("You do not have permission to run `ban`.");

        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(`Invalid usage! \`ban <user> <reason>\`.`)
        let bReason = args.join(" ").slice(22);

        let embed = new RichEmbed()
        .setTitle('Ban')
        .setColor('#ed4337')
        .addField('User', `<@${bUser.id}>`, true)
        .addField('Moderator', `<@${message.author.id}>`, true)
        .addField('Reason', `${bReason}`, true)
        .setFooter(`ID: ${bUser.id}`)
        .setTimestamp()

        let logChannel = message.guild.channels.find('name', 'mod-log');
        if(!logChannel) return message.channel.send('<:ayoError:635085861960155150> Please create a channel called `mod-log` and try again.')
        message.guild.member(bUser).kick(bReason);
        bUser.send(`You have been banned from ${message.guild.name} for ${bReason}.`)
        message.channel.send(`<:ayoSuccess:635085783719608330> Successfully kicked ${bUser.user.tag}.`)
        logChannel.send(embed);
    }
}
