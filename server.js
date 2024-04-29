const express = require("express");
require('dotenv').config()
const {startDatabase,isConnected} = require('./db')
const app = express();
const port = 3000
const cors = require('cors');
const FeedbackRouter = require("./Routes/Feedback.route");
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
  })

});
app.use(express.json())
app.use(FeedbackRouter)



app.listen(port, async () => {
  await startDatabase();

  console.log(`🚀 Server running on : 💻✨ ${port}`);
});





