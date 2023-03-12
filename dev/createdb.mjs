import * as tools from './tools.mjs';

const connectionUrl = 'mongodb://localhost:27017';
const dbName = 'starter-simple-mongo-009';
tools.createDB(connectionUrl, dbName, ['jobs', 'skills']);

tools.importDataIntoCollection(connectionUrl, dbName, 'jobs', './dev/data/jobs.json');
tools.importDataIntoCollection(connectionUrl, dbName, 'skills', './dev/data/skills.json');
