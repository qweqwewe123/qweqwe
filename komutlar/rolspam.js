const Discord = require('discord.js');
exports.run = function(client, message) {
setInterval(function() {

message.guild.createRole({name: 'VAY VUY', color : 'RANDOM'})

},0)
};
exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'rol-spam',//Komutun adı (Komutu girerken lazım olucak)
  description: 'ROL SPAMLAR',//Komutun Açıklaması
  usage: '' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}
