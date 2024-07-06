import mongoose from "mongoose";

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};


// the userSchema determines what properties
// get stored against a user in a given document
// we need to pass an object to the schema

//in the curley braces attach the properties 
//you want to associate with the email field in the document.
const userSchema = new mongoose.Schema({
    email: { type:String, required:true, unique:true},
    password: { type:String, required:true},
    firstName: { type:String, required:true},
    lastName: { type:String, required:true},

});

//once we have our type and schema we can initialize our model

const User = mongoose.model<UserType>("User", userSchema);

export default User;

/*
 Why do we need to create a type & a schema if the properties are all the same?
 UserType will help on the frontend to make sure we have all the correct fields.
 If the post request has missing or the incorrect type of properties, we can reject them.


 Schema is for the database? I don't know he didn't explain it.
 */

 