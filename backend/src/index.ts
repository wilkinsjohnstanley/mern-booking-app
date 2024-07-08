import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config"; //loads env variables when app starts
import mongoose from 'mongoose'; //lets us connect, query, methods etc
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)


//This creates a new express app
const app = express();
//converts the body of API requests into json 
//automatically for us so we don't have to handle that ourselves and each of our endpoints.
app.use(express.json());
//this parses the URL for the API
app.use(express.urlencoded({ extended: true }));
//cors will prevent certain requests from certain urls.
//It's a security thing.
//we'll configure it to recognize our front end and backend.
app.use(cors());

app.use("/api/users", userRoutes); 

//
app.listen(7000, ()=>{
    console.log("Your server running on locahost: 7000");
});



