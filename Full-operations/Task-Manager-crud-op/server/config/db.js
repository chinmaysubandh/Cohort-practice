const { default: mongoose } = require("mongoose");

const connectDB = async(DBURI) => {
    try {
        const MONGODB_URI = DBURI;
        if (MONGODB_URI) {
            await mongoose.connect(MONGODB_URI);
           
            console.log('database is connnected ');
            
        }
    } catch (error) {
        console.log('something went wrong while connecting to database');
        
        
    }
}

module.exports = connectDB;