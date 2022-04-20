require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] });


const token = process.env.bot_token;

const prefix = '%';

const { readdirSync } = require("fs");
const { sep } = require("path");
const antispam = new Set();

bot.commands = new Discord.Collection();
const load = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}${sep}`).filter(files => files.endsWith(".js"));
        for (const file of commands) {			
            const command = require(`${dir}/${file}`);
            bot.commands.set(command.name, command);

        }
    });   
};
load();


bot.on('ready', () => {
    console.log('Bot online');
    bot.user.setActivity("Teste PLAYING", { type: "PLAYING" });
})

bot.login(token);

/* Or if you need try messageCreate
bot.on('messageCreate', async msg => { })
*/
bot.on('message', message => {

    if (antispam.has(message.author.id)) {
        message.reply("Wait for 10seconds");
    } else {
     
    var args = message.content.slice(prefix.length).split(/ +/);

    var commandName = args.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;

        const command = bot.commands.get(commandName);

        try {

            if (message.content.startsWith(prefix)) {
            
                command.execute(message, args, bot);
           
                antispam.add(message.author.id);
                
            }

            }catch(error){
                console.log(error)
    }

    setTimeout(() => {
        antispam.delete(message.author.id);
      }, 10000);
      }

})