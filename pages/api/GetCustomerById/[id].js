import {connectToDatabase} from '../../../lib/db';
import {ObjectId} from 'mongodb';

const handler = async (req, res) => {
  const data = req.body;
  const {method} = req;
  const {id} = req.query;

  let customer;
  const client = await connectToDatabase();
  const db = client.db('MongoAthleisurceDB');

  if (method === 'GET') {
    const result = await db.collection('Athleisurce_Customers').findOne({ _id: new ObjectId(id) });
    console.log('customer search result', result);

    res.status(200).json({data: result});

  }
}