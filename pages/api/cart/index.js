import {connectToDatabase} from '../../../lib/db';


const handler = async (req, res) => {
  const client = await connectToDatabase();
  const db = client.db('MongoAthleisurceDB');
  const {method} = req;
  const data = req.body;

  if (method === 'POST') {
    const result = await db.collection('Athleisurce').insertOne(data);

    res.status(201).json({message: 'Cart added to item successfully!'});
    client.close();
  }
};
