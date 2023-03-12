import { MongoClient } from 'mongodb';

/**
 * Function to create a MongoDB database and collections
 * @param connectionString
 * @param {string} databaseName
 * @param {string[]} collectionNames 
 */
export const createDB = (connectionString, databaseName, ...collectionNames) => {
	MongoClient.connect(connectionString, (err, client) => {
		if (err) {
			console.log(`ERROR: ${err.message}`);
		} else {
			const dbo = client.db(databaseName);
			let collectionsCreated = 0;
			collectionNames.forEach(collectionName => {
				dbo.createCollection(collectionName, (err) => {
					if (err) {
						console.log(`ERROR: ${err.message}`);
					} else {
						collectionsCreated++;
						if (collectionsCreated === collectionNames.length) {
							client.close();
						}
					}
				});
			});
		}
	});
};