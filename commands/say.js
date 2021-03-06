const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
if (message.deletable) message.delete();
let prefix = '!'
let messagecontent = args.slice(0).join(" ") || null
if(messagecontent==null) {
  return message.channel.send('You did not specify anything to say!')
} else {
  if(!message.member.permissions.has("ADMINSTRATOR"))return message.channel.send(`**You do not have permission to use this command.**`)
  message.channel.send(messagecontent)
  }
}

module.exports.config = {
    name: "echo",
    description: "Makes the bot say whatever you say.",
    usage: "v!echo <message>",
    accessableby: "Admins",
    aliases: ['say']
}
