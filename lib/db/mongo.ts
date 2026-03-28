import { MongoClient, MongoClientOptions } from 'mongodb';

const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

// Optimized connection options
const options: MongoClientOptions = {
  maxPoolSize: 10,
  minPoolSize: 2,
  maxIdleTimeMS: 30000,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  compressors: ['zlib'],
};

// Lazy: only connect on first use, so process.env is read inside a request
// context where Cloudflare has already injected secrets.
function getClientPromise(): Promise<MongoClient> {
  const URI = process.env.MONGODB_URI;
  if (!URI) {
    throw new Error('Invalid environment variable: "MONGODB_URI"');
  }

  if (process.env.NODE_ENV === 'development') {
    if (typeof globalWithMongo._mongoClientPromise === 'undefined') {
      globalWithMongo._mongoClientPromise = new MongoClient(URI, options).connect();
    }
    return globalWithMongo._mongoClientPromise;
  }

  return new MongoClient(URI, options).connect();
}

export default getClientPromise;
