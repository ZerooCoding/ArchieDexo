const { inspect } = require('util');
const { RichEmbed } = require('discord.js')
const config = require('../../config.js');

module.exports = {
    name: "eval",
    category: "owner",
    run: async (client, message, args) => {

        if(message.author.id == '639871940340744192') {
            try {
                let toEval = args.join(" ")
                let evaluated = inspect(eval(toEval, { depth: 0 }));
                
                if (!toEval) {
                    return message.channel.send(`Error while evaluating: \`air\``);
                } else {
                    let hrStart = process.hrtime()
                    let hrDiff;
                    hrDiff = process.hrtime(hrStart);

                    let embed = new RichEmbed()
                    .setDescription(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.`)
                    .setColor('#ff00c3')
                    .addField('Input', `\`\`\`javascript\n${toEval}\n\`\`\``)
                    .addField('Output', `\`\`\`javascript\n${evaluated}\n\`\`\``)
                    return message.channel.send(embed)
                }
                
            } catch (e) {
                return message.channel.send(`Error while evaluating: \`${e.message}\``);
            }
    
          } else {
            return message.reply(" you are not the bot owner!").then(msg => msg.delete(5000))
          }
    }
}