// Removed callbacks, replaced with promise-based approach
// const assert = require('assert').strict; // no longer needed

exports.insertDocument = (db, document, collection) => {
  const coll = db.collection(collection);
    return coll.insertOne(document)
  //     , (err, result) => {
  //   assert.strictEqual(err, null);
  //   callback(result);
  // }
};
exports.findDocuments = (db, collection) => {
  const coll = db.collection(collection);
  return coll.find({}).toArray();
    // (err, docs) => {
  //     assert.strictEqual(err, null);
  //     callback(docs);
  // }
};
exports.removeDocument = (db, document, collection) => {
  const coll = db.collection(collection);
  return coll.deleteOne(document);
//   , (err, result) => {
//     assert.strictEqual(err, null);
//     callback(result)
// }
};
exports.updateDocument = (db, document, update, collection) => {
  const coll = db.collection(collection);
  return coll.updateOne(document, { $set: update }, null);
//   , (err, result) => {
//     assert.strictEqual(err, null);
//     callback(result);
// }
};

// BEFORE
// const assert = require('assert').strict;

// exports.insertDocument = (db, document, collection) => {
//   const coll = db.collection(collection);
//     coll.insertOne(document, (err, result) => {
//     assert.strictEqual(err, null);
//     callback(result);
//   });
// };
// exports.findDocuments = (db, collection) => {
//   const coll = db.collection(collection);
//   coll.find().toArray((err, docs) => {
//       assert.strictEqual(err, null);
//       callback(docs);
//   });
// };
// exports.removeDocument = (db, document, collection) => {
//   const coll = db.collection(collection);
//   coll.deleteOne(document, (err, result) => {
//       assert.strictEqual(err, null);
//       callback(result)
//   })
// };
// exports.updateDocument = (db, document, update, collection) => {
//   const coll = db.collection(collection);
//   coll.updateOne(document, { $set: update }, null, (err, result) => {
//       assert.strictEqual(err, null);
//       callback(result);
//   })
// };
