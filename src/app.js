const express = require('express');
const cors = require('cors');
require('dotenv/config')
const memeRoutes = require('./v1/routes/memeRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/meme", memeRoutes);

app.get('/', (req, res) => {
  res.send({ status: "success", message: "Minvera API v1 Connected." })
});

app.listen(process.env.PORT  || 3000, () =>
  console.log('Example app listening on port 3000!'),
);
