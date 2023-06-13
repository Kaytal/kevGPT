const { SlashCommandBuilder } = require('discord.js');

// Configure the array used for random replies
const replies = [
	'I just woke up',
	'Im tired',
	"It's a good time for a nap",
	'naptime?',
	'Someone say nap?',
	'Draw me like one of your french bugs.',
	'ha, 0420. yolo blazeit, or whatever the kids say',
	'do they have malort?',
	"I've already been drinking. :frowning:",
	'What a nice bulge =\\',
	'im already wine drunk',
	'I do coding competitions at work. The prize is a paycheck!',
	'but my butthole!',
	'I was just having some rain time cognac',
	"Been a while since I've been in a fight",
	"That's the way the booty cracks",
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