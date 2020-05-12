const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) {
  return message.channel.send('You don\'t have permission to use this command.')
  }
  let helpEmbed = new Discord.MessageEmbed()
  .setTitle('BitVerify Instructions')
  .setDescription(`Say v!settings and do what I tell you. Then I should be ready to go! \:smile\:`)
  .setFooter('The prefix is v!')
  .setColor('GREEN')
  message.channel.send(helpEmbed)
}

module.exports.config = {
    name: "verifyinstructions",
    description: "Instructions for the bot.",
    usage: "v!verifyinstructions",
    accessableby: "Admins",
    aliases: ['instructions']
}
