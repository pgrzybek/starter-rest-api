const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database')
const app = express();
const mainRoutes = require('./routes/main')
const cookieParser = require('cookie-parser');
const logger = require('morgan')
require('dotenv').config({path: './config/.env'})

connectDB()   

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(logger('dev'))

app.use('/', mainRoutes)

app.listen(process.env.PORT, ()=>{
  console.log('Server is running, you better catch it!')
})  
