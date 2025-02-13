import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content : `Hello ${message.author.globalName}`
    })
})

client.login(process.env.DISCORD_TOKEN)