import mongoose from "mongoose";

const connectDB =  async(DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connected to DB!")
    } catch (error) {
        console.log("Error in connecting to DB");        
    }
}
export default connectDB;