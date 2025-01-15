import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync } from 'fs';

// Load environment variables
dotenv.config();

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Command collection
client.commands = new Map();

// Load commands
const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  client.commands.set(command.default.name, command.default);
}

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  try {
    await client.commands.get(commandName).execute(message, args);
  } catch (error) {
    console.error(error);
    await message.reply('There was an error trying to execute that command!');
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

