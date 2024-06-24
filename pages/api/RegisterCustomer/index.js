import {connectToDatabase} from '../../../lib/db';

const handler = async (req, res) => {
  const data = req.body;
  const {method} = req;
  const {emailAddress, password} = data;

  let customer;
  const client = await connectToDatabase();
  const db = client.db('MongoAthleisurceDB');

  if (method === 'POST') {
    const existingUser = await db.collection('Athleisurce_Customers').findOne({ emailAddress: emailAddress });

    if (!existingUser) {
      customer = data;
    } else {
      res.status(422).json({message: 'User already exists'});
      client.close();
    }

    const result = await db.collection('Athleisurce_Customers').insertOne(customer);
    res.status(201).json({message: 'Registration success!'});
    client.close();

  }

};

export default handler;