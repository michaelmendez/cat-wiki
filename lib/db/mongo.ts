import { MongoClient, MongoClientOptions } from 'mongodb';

const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const URI = process.env.MONGODB_URI;

// Optimized connection options
const options: MongoClientOptions = {
  maxPoolSize: 10,
  minPoolSize: 2,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  compressors: ['zlib'],
};

let client;

if (!URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const clientPromise: Promise<MongoClient> = (() => {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (typeof globalWithMongo._mongoClientPromise === 'undefined') {
      client = new MongoClient(URI, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    return globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(URI, options);
    return client.connect();
  }
})();

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
