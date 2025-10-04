import clientPromise from '../lib/db/mongo';

async function createIndexes() {
  try {
    const client = await clientPromise;
    const db = client.db('catWiki');
    const collection = db.collection('breeds');

    // Create index on searchCount (descending) for efficient top searches
    await collection.createIndex({ searchCount: -1 });

    // Create index on id for faster lookups
    await collection.createIndex({ id: 1 }, { unique: true });

    console.log('✅ Indexes created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating indexes:', error);
    process.exit(1);
  }
}

createIndexes();
