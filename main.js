const { Client } = require('discord.js');
const client = new Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`je suis ${client.user.tag} !`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'everyone') msg.channel.send('@everyone, salut a tous!',{disableEveryone: false});
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), salut a tous!');
});

client.login('NDgzMzg0OTc1NTIyMTM2MDc2.XSI7eg.MwhKB8OIOl2qSUnAeo4ydRq5ff8');