const express = require("express");
const app = express();

//use for database connections
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/"; // part of the db connection string
const DB_NAME = "testDB"; // database name
const PORT = process.env.PORT || 8080; // port we want to listen to in our web server
// process.env.PORT is used for Heroku

// added for UPDATE statement in our CRUD operation
var ObjectId = require("mongodb").ObjectId; // for our EDIT

//used for our database connection
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// set up the client connection to our specified database
client.connect((err) => {
  db = client.db(DB_NAME).collection("formResults");
});

// method in express to recognize the incoming Request Object used for our POST method
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");

app.listen(PORT, function () {
  console.log("Server listening on port" + PORT);
});

app.get("/", (req, res) => {
  res.render("form.ejs");
});

// data from the form: {first: '', last: '', check: 'on', rating: '', agree: ''}
// will gain _id as primary key in mongo db
app.post("/show", (req, res) => {
  console.log(req.body);
  db.insertOne(req.body, (err, result) => {
    if (err) {
      return console.log("error: " + err);
    }
    console.log("Sucess inserting into DB");

    res.redirect("/show");
  });
});

app.get("/show", (req, res) => {
  db.find().toArray((err, results) => {
    if (err) {
      return console.log("error: " + err);
    }
    res.render("show.ejs", {
      formResults: results,
    });
  });
});
