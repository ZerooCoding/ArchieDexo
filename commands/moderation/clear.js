const { RichEmbed } = require("discord.js")

module.exports = {
    name: "clear",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES") || (!message.author.id === "596879758244053002")) return message.channel.send("You do not have permission to run `clear`.");

        if (message.deletable) message.delete();

        if(!args[0]) return message.channel.send(`Invalid usage! \`clear <amount>\`.`)
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`<:ayoSuccess:635085783719608330> Successfully cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
        });

    }
}
