import express, {Request, Response} from 'express'
import cors from 'cors'
import "dotenv/condig";

//This creates a new express app
const app = express();
//converts the body of API requests into json 
//automatically for us so we don't have to handle that ourselves and each of our endpoints.
app.use(express.json());
//this parses the URL for the API
app.use(express.urlencoded({extended:true}))
//cors will prevent certain requests from certain urls.
//It's a security thing.
//we'll configure it to recognize our front end and backend.
app.use(cors())

//get test
//NOW WITH ADDED TYPES!
app.get("/api/test", async(req:Request, res:Response)=>{
    res.json({message:"hello from express endpoint!"});
});

//
app.listen(7000, ()=>{
    console.log("server running on locahost:7000");
})



