const { Client, RichEmbed, Collection } = require("discord.js");
const config = require("./config.js");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", () => {
    console.log(client.user.tag + 'is online, master TotallyNotMayhem');

        let readyChannel = client.channels.get(config.logs.readylog);
    
        let readyEmbed = new RichEmbed()
        .setAuthor('Restart', client.user.displayAvatarURL)
        .setColor('#ff00c3')
        .setDescription(client.user.tag + ' has successfully connected to Discord.\nRunning in ' + client.guilds.size + ' guilds.')
        .setTimestamp()
    
        readyChannel.sendMessage(readyEmbed);

    client.user.setStatus('dnd');

    client.user.setPresence({
        game: {
            name: `d!help | Nuclear Development`,
            type: "WATCHING"

        }
    });
});

client.on("message", async message => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.settings.prefix
        }
    }

    let prefix = prefixes[message.guild.id].prefixes;

    if(message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if(!message.member) message.member - await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);

        
});

client.login(config.tokens.bot_token);