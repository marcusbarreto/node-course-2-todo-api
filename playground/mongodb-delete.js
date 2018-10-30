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
    // deleteMany
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) =>{
    //     console.log(result);
    // });
    // deleteOne
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) =>{
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // });
    // db.collection("Users").deleteMany({name: "Marcus"});
    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5bd8a9748792968bab82d763")
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });
    //db.close
});