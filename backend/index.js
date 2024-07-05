const express = require('express')
const { connectDB, fetchData } = require('./db')
const port = 5000
// cosnt {connectDB, fetchData}
const app = express()

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.setHeader(
    "Access-Control-allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next();
})

connectDB()
  .then(() => {
    // Connection successful
    fetchData()
      .then(data => {
        console.log('Fetched Data:' );//put data like this-- {'Fetched Data:',data} to retrrvie data
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

  app.use(express.json())


app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));

app.get('/', (req, res) => {
  res.send('Hello World!, Dhan nirankar ji')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})