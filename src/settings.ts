import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env' + process.env.NODE_ENV });

export const baseDir = path.dirname(path.dirname(__filename));
export const env = process.env.NODE_ENV;

export const database = {
  uri: process.env.MONGO_URI,
};

export const appSecret = process.env.APP_SECRET;
