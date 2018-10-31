const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = '5bd946817752ececc0d5b3b01';

// if ( !ObjectID.isValid(id) ){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo ){
//         return console.log('Id not found');
//     }
//     console.log("Todo by id", todo);
// }).catch( (e) => {
//     console.log(e);
// });

var id = "5bd8c03aae592195ba0aa67c";

User.findById(id).then( (user) => {
    if (!user) {
        return console.log("Unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});