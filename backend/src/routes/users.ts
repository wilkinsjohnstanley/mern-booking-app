import express,{Request,Response} from "express";
import User from "../models/user";
const router = express.Router();
router.post("/register", async(req: Request, res:Response)=>{
    try {
        //first check if The User Exists already based on the email.
        //check the user model/document in DB
        //find any doc where they match
        let user = await User.findOne({
            email:req.body.email,
        });
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        user = new User(req.body);
        await user.save();
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong."})
    }
});