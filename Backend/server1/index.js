const express = require('express');
const cors = require('cors');
const  UserRouter = require('./routers/user.router');
require('dotenv').config();
const ejs = require('ejs');
const multer = require('multer');



const app = express();
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null,file.fieldname+'_'+file.originalname)
    }
})
const uplaod = multer({ storage });
app.use(uplaod.single('image'))
// To serve static files using express js  'public is a folder which we want to serve to client'
app.use(express.static('public'))
app.use('/images',express.static('images'))
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
/* // set EJS as  view engine
app.set('view engine', 'ejs');
 */
app.get('/', (req, res) => {
    /* const username = 'john wick'
    res.render('index',{username}) */
    res.send("home page")
})

app.post('/form1',express.urlencoded(), (req, res) => {
    const urlbody = req.body;
    try {
        if (urlbody) {
            res.status(200).json({message:"url data recieved",body : urlbody})
        } else {
            res.json({message:"body is not present"})
        }
    } catch (error) {
        res.status(500).json({error : "internal server error", cause : error})
    }
})
//form data format also used for sending files ,images to server 
app.post('/formdata',(req, res) => {
    const formdata = req.body;
    const filedata = req.file;
    try {
        if (formdata) {
            res.status(200).json({ message: "form data data recieved", body: formdata, file: filedata.filename })
            console.log(filedata);
            
        } else {
            res.json({message:"body is not present"})
        }
    } catch (error) {
        res.status(500).json({error : "internal server error", cause : error})
    }
    

})

app.use('/users',UserRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})

 