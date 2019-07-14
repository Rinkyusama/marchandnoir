const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const { TOKEN, PREFIX } = require("./info.js");

client.on('ready', () => {
  console.log(`je suis ${client.user.tag} !`);
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  console.log(args);
  console.log(cmd);
  if (cmd === "ping") msg.channel.send('Pong!')
  if (msg.content.startsWith("avatar"))
  if (cmd === "repeat") {
    msg.delete()
    msg.channel.send(args.join(" "));

  }
  if (cmd === "sinfo"){
    const embed = new MessageEmbed()
     .setDescription(msg.guild.name)
     .setThumbnail(msg.guild.iconURL())
     .addField("Membres", msg.guild.memberCount)
     .addField("Owner", msg.guild.owner.user.tag)
     .setImage(msg.guild.owner.user.avatarURL())
     .setColor(990000)
     .setTimestamp();
    msg.channel.send(embed);
  }
  if (cmd === "role"){
    const channel = client.channels.find(r =>  r.name === "logs");
    const role = msg.guild.roles.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("le role n'existe pas")
    if (msg.member.roles.find( r => r.name === args[0])) {
      msg.member.roles.remove(role);
      channel.send(`j'ai supprimé le rôle ${role} à ${msg.author}`)
      msg.delete()
    } else {
      msg.member.roles.add(role);
      channel.send(`j'ai ajouté le rôle ${role} à ${msg.author}`);
      msg.delete()
    }

  }
});
client.on('ready', () => {
  client.user.setActivity("les gens qui font mn?help", {type: "WATCHING"})
})

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.indexOf(PREFIX) !== 0) return;
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === "help"){
    const embed = new MessageEmbed()
    .setTitle("comment dialoguer avec moi!")
    .setColor(990000)
    .addField("ping", "j'ecris pong")
    .addField("avatar","j'agrandi ton avatar")
    .addField("reports","j'avertie la personnne qu'elle a fait quelque choses de grave")
    .setDescription("TOUJOURS METTRE mn?")

   msg.channel.send(embed);
  }
})

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(r =>  r.name === "general");
  if (!channel)  return
  channel.send(`bienvenue a ${member.user.tag}`);
})

client.login(TOKEN);