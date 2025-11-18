const express = require('express');
const dotenv = require('dotenv');
const UserRouter = require('./routes/users.router.js');
const connectDB = require('./config/db.js');
const BookRouter = require('./routes/Books.router.js');

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DBURI = process.env.MONGODB_URI;
app.use(express.json());

app.get('/', (req, res) => {
    res.json('home')
})

app.use('/users', UserRouter);
app.use('/books',BookRouter)


connectDB(DBURI)
app.listen(PORT,()=>{return console.log(`server is running on http://localhost:${PORT}`)}
)