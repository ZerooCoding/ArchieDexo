const fs = require("fs");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: "setprefix",
    category: "info",
    run: async (client, message, args) => {
        
        if(!message.member.hasPermission("MANAGE_GUILD") || (!message.author.id === "YOUR_USER_ID")) return message.channel.send("You do not have permission to run `setprefix`.");

        if(!args[0] | args[0 == "help"]) return message.channel.send(`Invalid usage! \`setprefix <new-prefix>\`.`);

        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

        prefixes[message.guild.id] = {
            prefixes: args[0]
        };

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });

        let prefixEmbed = new RichEmbed()
        .setAuthor('| New Prefix', message.author.displayAvatarURL)
        .setColor("#ff00c3")
        .setDescription(`Prefix has successfully been set to \`${args[0]}\`.`)

        message.reply(prefixEmbed);

    }
}
