var express = require("express");
var bodyParser = require("body-parser");
var {ObjectID} = require("mongodb");

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) => {
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get("/todos/:id", (req,res) =>{
    var id = req.params.id;
    if ( !ObjectID.isValid(id) ){
        return res.status(404).send();
    }
    console.log("test");
    Todo.findById(id).then( (todo) => {
        if ( !todo) {
            return res.status(404).send();
        }
        res.send({todo: todo});
    }).catch( (e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};
// var newTodo = new Todo({
//     text: "Cook dinner",
// });

// newTodo.save().then((doc) => {
//     console.log("Saved", doc)
// }, (e) => {
//     console.log("Unable to save", e);
// });
//save new something

// var otherTodo = new Todo({
//     text: "  Edit this video          "
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("Unable to save",e);
// });

// var newUser = new User({
//     email: " marcus@example.com "
// });

// newUser.save().then((doc) => {
//     console.log("User saved",doc);
// }, (e) => {
//     console.log("fail to save user",e);
// })