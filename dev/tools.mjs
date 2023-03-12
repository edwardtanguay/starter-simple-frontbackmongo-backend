import { MongoClient } from 'mongodb';
import fs from "fs";

/**
 * Function to create a MongoDB database and collections
 * @param connectionString
 * @param {string} databaseName
 * @param {string[]} collectionNames 
 */
export const createDB = (connectionString, databaseName, collectionNames) => {
	MongoClient.connect(connectionString, (err, client) => {
		if (err) {
			console.log(`ERROR: ${err.message}`);
		} else {
			const dbo = client.db(databaseName);
			let collectionsCreated = 0;
			let count = 0;
			collectionNames.forEach(collectionName => {
				count++;
				dbo.createCollection(collectionName, (err) => {
					if (err) {
						console.log(`ERROR: ${err.message}`);
						if (count === collectionNames.length) {
							client.close();
						}
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

/**
 * Imports data into MongoDB collection
 */
export const importDataIntoCollection = (connectionString,dataBaseName, collectionName, file) => {
    MongoClient.connect(connectionString, (err, db) => {
        if (err) throw err;
        const dbo = db.db(dataBaseName)

        fs.readFile(file, (err, data) => {
            if (err) throw err;
            const documents = JSON.parse(data);

            documents.forEach((document) => {
                delete document._id
                delete document.__v

            })

            dbo.collection(collectionName).insertMany(documents, (err, res) => {
                if (err) throw err;
                db.close();
            });
        })
    })
}