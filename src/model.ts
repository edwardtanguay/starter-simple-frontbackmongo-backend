import * as config from './config.js';

export const getJobs = async () => {
	const jobs = [];
	return jobs;
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
</ul>
	`;
}