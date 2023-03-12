import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
	id: Number,
	title: String,
	company: String,
	url: String,
	description: String,
	skillList: String,
	publicationDate: String
});

export const Job = mongoose.model('job', jobSchema);