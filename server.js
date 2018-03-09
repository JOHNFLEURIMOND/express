console.log('May Node And Express Be With You!! ');

const MongoClient = require('mongodb').MongoClient
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

var db = database.db

MongoClient.connect('mongodb://JohnFleurimond:Gohardorgohome50!?@$@ds259778.mlab.com:59778/express-practice', (err, client) => {
  if (err) return console.log(err)
  db = client.db('express-practice') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({
  extended: true
}))


app.listen(3000, function() {
  console.log('listening on 3000')
});


app.get('/', (req, res) => {
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  res.sendFile(__dirname + '/index.html')
});

app.post('/quotes', (req, res) => {
  console.log(req.body)
});


app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})