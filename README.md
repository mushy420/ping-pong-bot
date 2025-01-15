# ping-pong-bot

To use this bot, follow these steps:

1. Replace `your_discord_bot_token_here` in the `.env` file with your actual Discord bot token.
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the bot by running `npm start`.


This bot implements the following best practices:

1. Uses environment variables for sensitive information (bot token) and configuration (command prefix).
2. Implements a command handler for better organization and scalability.
3. Uses ESM (ECMAScript Modules) for modern JavaScript syntax.
4. Implements error handling to prevent the bot from crashing on command errors.
5. Uses async/await for better handling of asynchronous operations.
6. Provides a more informative ping response, including the latency.


The bot will respond to the `!ping` command with "Pong!" followed by the latency in milliseconds. You can easily add more commands by creating new files in the `commands` directory following the same structure as the `ping.js` file.
