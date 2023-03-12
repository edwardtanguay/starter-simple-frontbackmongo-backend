import * as tools from './tools.mjs';
import dotenv from 'dotenv';

dotenv.config();

const connectionUrl = process.env.MONGODB_CONNECTION;
const dbName = process.env.MONGODB_DBNAME;

// TODO: make one array
tools.createDB(connectionUrl, dbName, ['jobs', 'skills']);
tools.importDataIntoCollection(connectionUrl, dbName, 'jobs', './dev/data/jobs.json');
tools.importDataIntoCollection(connectionUrl, dbName, 'skills', './dev/data/skills.json');
