const assert = require('assert').strict;

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  coll.insertOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);
  });
};
exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);
};
exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
};
exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
};
