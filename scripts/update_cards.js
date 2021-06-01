var MongoClient = require('mongodb').MongoClient;
var Cards = require('../game_material/cards');

const readline = require('readline-sync');
var url = readline.question("Insert MongoDB URL:\n");



const clientInstance = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cookingCrisis");

    // init empty collection "cards"
    dbo.listCollections({name: "cards"})
    .next(function(err, collinfo) {
        if (collinfo) {
          deleteAllRecordsFromCollection(dbo, "cards", db)
        } else {
          createCollection(dbo, "cards", db);
        }
    });


    // add cards into collection
    dbo.collection("cards").insertMany(Cards, function(err, res) {
      if (err) throw err;
      console.log("Inserted: " + res.insertedCount + " cards.");
      db.close();
    });

});


function createCollection(dbo, collectionName, db) {
    dbo.createCollection(collectionName, function(err, res) {
        if (err) throw err;
        db.close();
    });
}

function deleteAllRecordsFromCollection(dbo, collectionName, db) {
    dbo.collection(collectionName).deleteMany({}, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " old card(s) deleted");
        db.close();
    });
}