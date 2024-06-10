import express from 'express'
import cors from 'cors'
import "dotenv/condig";

//This creates a new express app
const app = express();
//converts the body of API requests into json 
//automatically for us so we don't have to handle that ourselves and each of our endpoints.
app.use(express.json());
//
app.use(express.urlencoded({extended:true}))
