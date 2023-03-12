import * as model from './model.js';
import express from 'express';
import cors from 'cors';
import * as config from './config.js';

const app = express();
app.use(cors);

app.get('/', (req: express.Request, res: express.Response) => {
	console.log('test001');
	res.send('testing');
	// res.send(model.getApiInstructions());
});

app.get('/jobs', async (req, res) => {
	const jobs = await model.getJobs();
	res.status(200).json(jobs);
});

app.listen(config.PORT, () => {
	console.log(`${config.APP_NAME} is listening on port http://localhost:${config.PORT}`);
});