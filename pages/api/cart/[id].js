import {connectToDatabase} from '../../../lib/db';


const handler = async (req, res) => {
  const {id} = req.query;
  const client = await connectToDatabase();
  const db = client.db('MongoAthleisurceDB');
  const {method} = req;

  if (method === 'GET') {

  }
};
