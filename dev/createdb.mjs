import * as tools from './tools.mjs';
import dotenv from 'dotenv';

dotenv.config();

const connectionUrl = process.env.MONGODB_URL;
const dbName = process.env.MONGODB_DBNAME;
const dataSources = [
	{
		name: 'jobs',
		pathAndFileName: './dev/data/jobs.json'
	},
	{
		name: 'skills',
		pathAndFileName: './dev/data/skills.json'
	}
];

tools.createDB(connectionUrl, dbName, dataSources.map(m => m.name));
dataSources.forEach(m => tools.importDataIntoCollection(connectionUrl, dbName, m.name, m.pathAndFileName));
