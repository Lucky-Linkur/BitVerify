const Discord = require('discord.js')
const Levels = require('discord-xp')

module.exports.run = async (bot, message, args) => {
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
let level = await Levels.fetch(member.id, message.guild.id)
let leveldisplay = ''
let xpdisplay = ''
if(!level){
  leveldisplay = '0'
  xpdisplay = '0'
} else {
  leveldisplay = `${level.level}`
  xpdisplay = `${level.xp}`
}
  let status = '';
  if (whoismember.presence.status === 'dnd'){
    status = 'Do Not Disturb';
      } else if (whoismember.presence.status === 'online'){
    status = 'Online';
      } else if (whoismember.presence.status === 'offline'){
    status = 'Offline';
      } else if (whoismember.presence.status === 'idle'){
    status = 'Idle';
      } else if (whoismember.presence.status === 'transparent'){
    status = 'Transparent';
      }
const embed = new Discord.MessageEmbed()
.setTitle(`${member.user.username}'s Info`)
.addField('Username', `**${member.user.username}**${member.user.discriminator}`, true)
.addField('User ID', `**${member.id}**`, true)
.addField('Nickname', `**${member.user.nickname ? member.user.nickname : 'No Nickname'}**`)
.addField('Level', `**${leveldisplay}**`)
.addField('XP', `**${xpdisplay}**`)
.addField('Status', `**${status}**`)
.addField('Joined Discord', `**${member.user.createdAt.toLocaleDateString()}**`)
.addField('Joined Server', `**${member.joinedAt.toLocaleDateString()}**`)
.setThumbnail(member.user.displayAvatarURL())
.setFooter(member.user.username, member.user.displayAvatarURL())
.setColor('BLUE')
}
//name this whatever the command name is.
module.exports.config = {
    name: "userinfo",
    description: "Gets information of the mentioned member.",
    usage: "!userinfo <mention | id | name>",
    accessableby: "All Members",
    aliases: ['whois', 'user-info']
}
