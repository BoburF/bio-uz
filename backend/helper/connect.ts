import mongoose from "mongoose";

const connectToMongoDB = async (url: string) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(url, () => {
            console.log('MongoDB connected successfully');
        })
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongoDB