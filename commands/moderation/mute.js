const { RichEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "mute",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES") || (!message.author.id === "596879758244053002")) return message.channel.send("You do not have permission to run `tempmute`.");

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.channel.send(`Invalid usage! \`mute <user> <length>\`.`);
        if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send('That user cannot be muted.');
        let muterole = message.guild.roles.find(`name`, "Muted");

        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "Muted",
                    color: "#979da5",
                    permissions: []
                })
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        MANAGE_CHANNELS: false,
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        CONNECT: false
                    });
                });
            }catch(e){
                console.log(e.stack);
            }
        }
    
        let mutetime = args[1];
        if(!mutetime) return message.channel.send(`Invalid usage! \`mute <user> <length>\`.`);

        await(tomute.addRole(muterole.id));

        let embed = new RichEmbed()
        .setTitle('Mute')
        .setColor('#ff470f')
        .addField('User', `<@${tomute.id}>`, true)
        .addField('Moderator', `<@${message.author.id}>`, true)
        .addField('Length', `${ms(ms(mutetime))}`, true)
        .setFooter(`ID: ${tomute.id}`)
        .setTimestamp()

        let logChannel = message.guild.channels.find('name', 'mod-log');
        if(!logChannel) return message.channel.send('<:ayoError:635085861960155150> Please create a channel called `mod-log` and try again.')
        tomute.send(`You have been muted in ${message.guild.name} for ${ms(ms(mutetime))}.`)
        message.channel.send(`<:ayoSuccess:635085783719608330> Successfully muted ${tomute.user.tag}.`)
        logChannel.send(embed);

        setTimeout(function(){
            tomute.removeRole(muterole.id);

        }, ms(mutetime));

    }
}
