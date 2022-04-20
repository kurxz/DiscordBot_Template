module.exports = {
    name: 'hi',
    description: "Hi command",
  
  execute(message, args, bot) {
 
  	message.reply("Hello with Mention");
    message.channel.send("Just a Hello")
	
    }
}
    