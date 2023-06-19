import  mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL= process.env.MONGO_URL

function connectToMongoDB() {

	mongoose.connect(MONGO_URL);

    mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB successfully');
        });
    
     mongoose.connection.on('error', (err) => {
            console.log('Error connecting to MongoDB', err);
        })
    }
    
    
    export {connectToMongoDB};
		