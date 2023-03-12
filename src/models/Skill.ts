import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
	idCode: String,
	name: String,
	url: String,
	description: String,
});

export const Skill = mongoose.model('skill', skillSchema);