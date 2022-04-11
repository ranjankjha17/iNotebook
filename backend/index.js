const connectTOMongo=require('./db');
const express = require('express')
const cors=require('cors');
const app = express();
const port = 5000

app.use(express.json());
app.use(cors());
connectTOMongo();

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
