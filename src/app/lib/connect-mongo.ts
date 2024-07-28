'use server';

import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;
const cached: {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
} = {};

async function connectMongo() {
  if (!DATABASE_URL) {
    throw new Error(
      'Please define the DATABASE_URL environment variable inside .env.local'
    );
  }

  if (cached.connection) {
    console.log('Using cached database connection');
    return cached.connection;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose.connect(DATABASE_URL, opts);
  }

  try {
    cached.connection = await cached.promise;
    console.log('Database connected successfully');
  } catch (e) {
    console.error('Database connection failed:', e);
    cached.promise = undefined;
    throw e;
  }

  return cached.connection;
}

export default connectMongo;
