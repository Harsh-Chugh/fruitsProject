const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/fruitsDB";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('fruitsDB');
    const fruits = database.collection('fruits');

    // await client.connect();

    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);

    // await fruits.insertMany(
    //     [
    //         {
    //             name: "Apple",
    //             rating: 9,
    //             review: "Good Fruit!"
    //         },
    //         {
    //             name: "Orange",
    //             rating: 8,
    //             review: "Kinda Sour!"
    //         },
    //         {
    //             name: "Banana",
    //             rating: 9,
    //             review: "Good for Gym People"
    //         }
    //     ]
    // )

    await client.connect();
    const all_fruits = await fruits.find().toArray();

    console.log(all_fruits);


    // console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);