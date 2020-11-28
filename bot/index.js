/*
index.js - Main bot file
*/

const Discord = require('discord.js')
const client = new Discord.Client()


const conf = require('./config.json')
const command = require('./helpers/cmd')
const mongo = require('./helpers/mongo')

client.on('ready', async () => {
    // The code here will run when the bot is ready
    // Let the user know that the bot is online
    console.log('Bot is ready')

    // Connect to the MongoDB
    await mongo().then(mongoose => {
        try {
            console.log('INFO: Connected to MongoDB')
        } finally {
            mongoose.connection.close()
        }
    })

    // You can add some commands here
    command(client, 'hello', (message) => {
        message.channel.send('Hello')
    })
})

// Login to Discord with the token specified inside the config file
client.login(conf.token)