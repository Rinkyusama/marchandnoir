const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const { TOKEN, PREFIX } = require("./info.js");

client.on('ready', () => {
  console.log(`je suis ${client.user.tag} !`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!')
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}avatar`))
     msg.channel.send(msg.author.displayAvatarURL())
  
})

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}help`)) {
    const embed = new MessageEmbed()
    .setTitle("comment dialoguer avec moi!")
    .setColor(990000)
    .addField("ping", "j'ecris pong")
    .addField("mnavatar","j'agrandi ton avatar")
    .setDescription("TOUJOURS METTRE mn?")
    
   msg.channel.send(embed);
  }
})

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(ch => ch.name === 'général');
  if (!channel)  return
  channel.send(`bienvenue a ${member.user.tag}`);

})

client.login(TOKEN);