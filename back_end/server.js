require('dotenv').config();

// connect DB
const {connectDB} = require('./config/db');
connectDB();

const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

const app = express();

//Cors cho phép client nói chuyện với server
app.use(cors());

//Body parse chuyển đổi các thông số người dùng chuyển vào server 
app.use(express.json());

// Mount the route kết nối route với server
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/posts', postRoute);
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});