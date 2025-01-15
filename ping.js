export default {
  name: 'ping',
  description: 'Ping!',
  async execute(message) {
    const sent = await message.reply('Pinging...');
    const latency = sent.createdTimestamp - message.createdTimestamp;
    await sent.edit(`Pong! Latency is ${latency}ms.`);
  },
};

