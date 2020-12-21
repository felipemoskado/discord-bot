const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client()
const prefix = '!'

client.on('message', (message) => {
    console.log('message:', message);
    if (message.author.bot) return

    if (!message.content.startsWith('!')) return
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
    }

    if (command === 'sum') {
        const sum = args.map(num => parseFloat(num)).reduce((total, num) => total += num)
        message.reply(`The sum of all the arguments you provided is ${sum}`)
    }
})

client.login(config.BOT_TOKEN)