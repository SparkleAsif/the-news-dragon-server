const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.Port||5000;

const catagories = require('./data/catagories.json')

app.use(cors())

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello,Dragon is Running!');
});

app.get('/catagories', (req,res)=>{
  console.log(catagories)
    res.send(catagories)
})

// Start the server
app.listen(port, () => {
  console.log(`Dragon API Server is running at http://localhost:${port}`);
});