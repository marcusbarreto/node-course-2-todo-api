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
    

    // db.collection("Todos").find({
    //     _id: new ObjectID("5bd899bb89592ff05c8dff34")
    // }).toArray().then( (docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection("Users").find({name: "Marcus"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos',err);
    });


    //db.close();
});