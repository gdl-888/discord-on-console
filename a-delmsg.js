const inputReader = require('wait-console-input')

function input(p) {
	return inputReader.readLine(p);
}

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log("Ctrl+C to exit.\n");
	
	var dc = input("Channel-ID where the message is: ");
	var dm = input("Message-ID to delete: ");

	client.channels.get(dc).fetchMessage(dm).then(msg => msg.delete());
	
	console.log('');
});

client.login("여기에 토큰 입력");
