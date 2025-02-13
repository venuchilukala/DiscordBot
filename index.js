import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content : `Hello ${message.author.globalName}`
    })
})

client.login('MTMzOTQ4NjI5MTI2NzQyMDI2Mw.Gd-adT.c1WJ-ANUisY0AAYIH_W3WQ8bdPK50zKlCuj_gQ')