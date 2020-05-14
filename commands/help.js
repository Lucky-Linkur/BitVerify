const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  let helpEmbed = new Discord.MessageEmbed()
  .setTitle('BitVerify Command List')
  .setDescription('\`settings\`, \`verify\`, \`help\`, \`verifyinstructions\`, \`reset\`, \`verifymessage\`, \`membercount\`, \`resetcount\`, \`stats\`')
  .addField('\`settings <mention channel here> <mention role here>\`', 'Sets the verified role and settings.')
  .addField('\`verify\`', 'Verifies the user.')
  .addField('\`help\`', 'Sends this message!')
  .addField('\`verifyinstructions\`', 'Sends the instructions on how to setup this bot.')
  .addField('\`reset\`', 'Resets your settings just in case you mess up.')
  .addField('\`verifymessage <mention channel here>\`', 'Makes the bot send a message about how to verify so you don\'t have to. Make sure you set the settings before using this command!')
  .addField('\`resetcount\`', 'Resets the member count if you mess up.')
  .addField('\`membercount <channel id>\`', 'Sets the member count.')
  .addField('\`stats\`', 'Gets the information about the settings you have so far.')
  .setFooter('The prefix is v!')
  .setColor('GREEN')
  message.channel.send(helpEmbed)
}

module.exports.config = {
    name: "help",
    description: "Gives a list of commands.",
    usage: "v!help",
    accessableby: "All Members",
    aliases: ['']
}
