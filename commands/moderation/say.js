const { RichEmbed } = require("discord.js")

module.exports = {
    name: "say",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES") || (!message.author.id === "596879758244053002")) return message.channel.send("You do not have permission to run `say`.");

        if (message.deletable) message.delete();
        
        if (args.length < 1)
           return message.channel.send(`Invalid usage! \`say [embed] <message>\`.`)

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setColor(roleColor)
                .setDescription(args.slice(1).join(" "))
                .setFooter(message.author.tag, message.author.displayAvatarURL)
                .setTimestamp()

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}
