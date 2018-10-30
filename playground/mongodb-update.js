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

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5bd8a6b18792968bab82d61b")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //    returnOriginal: false 
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5bd8a8038792968bab82d6bf")
    }, {
        $set: {
            name: "Marcus"
        },
        $inc: {
            age: 1
        }
    },{
       returnOriginal: false 
    }).then((result) => {
        console.log(result);
    });


    //Barreto
    //db.close
});