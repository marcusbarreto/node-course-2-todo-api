//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");
console.log("Starting here");

// var user = {name: "Marcus", age:35 };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if ( err ){
        return console.log('Unable to connect to Mongo database server');
    }
    console.log('Connected to MongoDB Server');
    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if ( err ){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection("Users").insertOne({
    //         name: "Marcus",
    //         age: 35,
    //         location: "Rio de Janeiro"
    //     }, (err, result) => {
    //     if ( err ){
    //         return console.log("Unable to insert user", err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});