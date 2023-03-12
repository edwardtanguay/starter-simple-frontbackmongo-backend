// import fs from 'fs';
import mongoose from 'mongoose';
import * as config from './config.js';
import { IJob, ISkill } from './interfaces.js';
import { Job } from './models/Job.js';
import { Skill } from './models/Skill.js';

// const jobs: IJob[] = JSON.parse(fs.readFileSync('./dev/data/jobs.json', 'utf8'));
// const skills: ISkill[] = JSON.parse(fs.readFileSync('./dev/data/skills.json', 'utf8'));

mongoose.set('strictQuery', false);
mongoose.connect(config.MONGODB_CONNECTION);

export const getJobs = async () => {
	const docJobs = await Job.find();
	const jobs: IJob[] = [];
	docJobs.forEach(docJob => {
		jobs.push({
			id: docJob.id,
			title: docJob.title,
			company: docJob.company,
			url: docJob.url,
			description: docJob.description,
			skillList: docJob.skillList,
			publicationDate: docJob.publicationDate
		});
	})
	return jobs;
}

export const getSkills = async () => {
	const docSkills = await Skill.find();
	const skills: ISkill[] = [];
	docSkills.forEach(docSkill => {
		skills.push({
			idCode: docSkill.idCode,
			name: docSkill.name,
			url: docSkill.url,
			description: docSkill.description
		});
	})
	return skills;
}

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #bbb;
		font-family: sans-serif;
	}
	code {
		background-color: #333;
	}
	li {
		margin-bottom: .3rem;
	}
	a {
		color: yellow;
		font-family: courier;
		background-color: #222;
	}
	span {
		color: #fff;
		font-family: courier;
		background-color: #222;
	}
</style>
<h1>${config.APP_NAME}</h1>

<ul>
	<li>GET <a href="jobs">/jobs</a> - get all jobs</li>
	<li>GET <a href="skills">/skills</a> - get all skills</li>
</ul>
	`;
}