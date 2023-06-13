const { SlashCommandBuilder } = require('discord.js');

// Configure the array used for random replies
const replies = [
	'I just woke up',
	'Im tired',
	"It's a good time for a nap",
	'Someone say nap?',
	'What a nice bulge =\\',
	"Been a while since I've been in a fight",
	':sleeping_accommodation:',
	':sleepy:',
	':sleeping:',
	'<:kev:1114762417231118437>'
];

// Configure the randomizer that will pick a random integer from 0 to the length of the array; used for array index
const random = () => Math.floor(Math.random() * replies.length);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kevgpt')
		.setDescription('Using the latest KevGPT AI algorithm responds accordingly!'),
	async execute(interaction) {
		await interaction.reply(replies[random()]);
	},
};