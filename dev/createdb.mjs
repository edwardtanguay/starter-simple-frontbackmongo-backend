import * as tools from './tools.mjs';

const connectionUrl = 'mongodb://localhost:27017';
const dbName = 'starter-simple-mongo-006';
tools.createDB(connectionUrl, dbName, 'jobs', 'skills');
