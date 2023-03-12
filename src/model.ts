import fs from 'fs';
import * as config from './config.js';
import { IJob, ISkill } from './interfaces.js';

const jobs: IJob[] = JSON.parse(fs.readFileSync('./dev/data/jobs.json', 'utf8'));
const skills: ISkill[] = JSON.parse(fs.readFileSync('./dev/data/skills.json', 'utf8'));

export const getJobs = async () => {
	return jobs;
}

export const getSkills = async () => {
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