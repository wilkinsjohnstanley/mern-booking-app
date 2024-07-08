import express,{Request,Response} from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import {check, validationResult} from "express-validator";


const router = express.Router();
//add an array after "/register"
router.post("/register", [
    check("firstName", "First name is required").isString(),
    check("lastName", "Last name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "A password of six or more characters is required").isLength({min:6}),


], async(req: Request, res:Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({message: errors.array()})
    }



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

        //create token
        const token = jwt.sign({userId: user.id}, 
            process.env.JWT_SECRET_KEY as string,
            { expiresIn: "1d"}
        );
        //return a response cookie
        res.cookie("auth_token", token, {
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            maxAge:86400000,
        })
        return res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.status(500).send({message:"Something went wrong."})
    }
});


export default router;