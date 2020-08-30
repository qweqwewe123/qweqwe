const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('GOLD')
      embed.setTitle('Ailemiz')
      embed.setDescription(`Büyük bir ailedeyiz !. Ailemde **${bot.guilds.size}** Kadar Sunucum Var.`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s','a'],
  permLevel: 4,
kategori: 'sahip'
};

exports.help = {
  name: "sunucular",
  category: 'yapımcı',
  description: "Sunucular",
  usage: "ailemiz"
};