// index.js

const express = require('express');
const {connection}= require("./configs/db");
const { userroutes } = require('../../routes/userroutes');
const app = express();
//const hotelRoutes = require('../../day13/backened/routes/hotelroutes');
//const logger = require('./middleware/logger');

const PORT = 3000;
app.use(express.json())
app.use(userroutes);
// // Middleware
// app.use(express.json());
// app.use(logger);

// // Routes
// app.use('/api/hotels', hotelRoutes);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
app.listen(PORT,async()=> {
  try{
    console.log("db is connecting");
    
   await connection;
   console.log("db connected1");
   
  }catch(error){console.log("error" + error);
  }
  console.log(`server is running  at http://localhost:${PORT}`)
  
});


