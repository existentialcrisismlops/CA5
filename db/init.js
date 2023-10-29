const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const dbName = 'my_database';
const client = new MongoClient(url);

// Data initialization function
async function initializeData() {
  try {
    await client.connect();
    const db = client.db(dbName);

    const usersCollection = db.collection('users');
    await usersCollection.insertMany([
      { name: 'User1', email: 'user1@example.com' },
      { name: 'User2', email: 'user2@example.com' },
    ]);

    console.log('Data initialization complete.');
  } catch (error) {
    console.error('Error initializing data:', error);
  } finally {
    // Close the MongoDB connection
    client.close();
  }
}

initializeData();