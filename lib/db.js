import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(process.env.MONGO_DB_CONNECTION_STRING);
  return client;
};

export const base64ToHex = (base64) => {
    const buffer = Buffer.from(base64, 'base64');
    return buffer.toString('hex');
};

export const hexToGuid = (hex) => {
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32),
  ].join("-");
};
