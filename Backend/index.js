const connectToMongo = require('./db');
const express = require('express');
const authRoutes = require("./routes/auth");

connectToMongo();

const app = express()
const port = 3005;

//It is a middleware to request showing on console..
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth',authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})