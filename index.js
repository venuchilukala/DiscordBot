import { Client, Events, GatewayIntentBits, InteractionCallback } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    // console.log(message)
    if(message.author.bot) return;

    if(message.content.startsWith("create")){
        const url = message.content.split('create')[1]
        return message.reply({
            content : "Generating Short ID for " + url,
        })
    }

    message.reply({
        content : `Hi ${message.author.globalName}`
    })
})

client.on("interactionCreate", interaction => {
    // console.log(interaction)
    interaction.reply("Pong 😉")
})

client.login(process.env.DISCORD_BOT_TOKEN)