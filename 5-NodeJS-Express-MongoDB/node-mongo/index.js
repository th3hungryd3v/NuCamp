//**==> Main entry point for this App  <==**/
const MongoClient = require('mongodb').MongoClient; // This will act as a client for the mongodb server
// const assert = require('assert').strict; // no longer required, used to demonstrate "Callback Hell"
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {
  console.log('Connected correctly to server');
  
// }), (err, client) => { // Call completed after ' true}) <=='

  // assert.strictEqual(err, null);


  const db = client.db(dbname);

  db.dropCollection('campsites')
  .then(result => {
    console.log('Dropped Collection', result);
  })
  .catch(err => console.log('No collection to drop.'));


  // , (err, result) => {
    // assert.strictEqual(err, null);


    // const collection = db.collection('campsites'); ** Not needed anymore because we're now doing this through the 'dboper' module(operations.js)

    // collection.insertOne(
    dboper.insertDocument(
      db,
      { name: 'Breadcrumb Trail Campground', description: 'Test' },
      'campsites')
     .then(result => {
        console.log('Insert Document:', result.ops);
        // assert.strictEqual(err, null);
        return dboper.findDocuments(db, 'campsites');
     })
     .then(docs => {
       console.log('Found Documents:', docs);
        // , (docs) => {
         return dboper.updateDocument(
            db,
            { name: 'Breadcrumb Trail Campground' },
            { description: 'Updated Test Description' },
            'campsites');
          })
      .then(result => {
            console.log('Updated Document Count:', result.result.nModified);
            //, (result) => {
              return dboper.findDocuments(db, 'campsites');
          })
      .then(docs => {
        console.log('Found Documents:', docs);
              // , (docs) => {
        return dboper.removeDocument(
                  db,
                  { name: 'Breadcrumb Trail Campground' },
                  'campsites');
                })
      .then(result => {
                    console.log('Deleted Document Count:', result.deletedCount);

                    // collection.find().toArray((err, docs) => {
                    //   assert.strictEqual(err, null);
                    //   console.log('Found Documents:', docs);

                    return client.close();
                  })
          .catch(err => {
              console.log(err);
              client.close();
  });
})
.catch(err => console.log(err));

//**==> Main entry point for this App  <==**/ PYRAMID OF DOOM
// const MongoClient = require('mongodb').MongoClient; // This will act as a client for the mongodb server
// const assert = require('assert').strict;
// const dboper = require('./operations');

// const url = 'mongodb://localhost:27017/';
// const dbname = 'nucampsite';

// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   assert.strictEqual(err, null);

//   console.log('Connected correctly to server');

//   const db = client.db(dbname);

//   db.dropCollection('campsites', (err, result) => {
//     assert.strictEqual(err, null);

//     console.log('Dropped Collection', result);

//     // const collection = db.collection('campsites'); ** Not needed anymore because we're now doing this through the 'dboper' module(operations.js)

//     // collection.insertOne(
//     dboper.insertDocument(
//       db,
//       { name: 'Breadcrumb Trail Campground', description: 'Test' },
//       'campsites',
//       (result) => {
//         console.log('Insert Document:', result.ops);
//         // assert.strictEqual(err, null);

//         dboper.findDocuments(db, 'campsites', (docs) => {
//           console.log('Found Documents:', docs);

//           dboper.updateDocument(
//             db,
//             { name: 'Breadcrumb Trail Campground' },
//             { description: 'Updated Test Description' },
//             'campsites',
//             (result) => {
//               console.log('Updated Document Count:', result.result.nModified);

//               dboper.findDocuments(db, 'campsites', (docs) => {
//                 console.log('Found Documents:', docs);

//                 dboper.removeDocument(
//                   db,
//                   { name: 'Breadcrumb Trail Campground' },
//                   'campsites',
//                   (result) => {
//                     console.log('Deleted Document Count:', result.deletedCount);

//                     // collection.find().toArray((err, docs) => {
//                     //   assert.strictEqual(err, null);
//                     //   console.log('Found Documents:', docs);

//                     client.close();
//                   }
//                 );
//               });
//             }
//           );
//         });
//       }
//     );
//   });
// });
