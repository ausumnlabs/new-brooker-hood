const express = require('express');
const dotenv = require('dotenv');
const DB = require("./config/db")

dotenv.config();

const app = express();
app.use(express.json());

DB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use("/api/location", require("./routes/locationRoutes"));

app.get("/",(req,res)=>{
  res.send("Api is running.......")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
