import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async() => {
  mongoose.set('strictQuery',true)

  if(isConnected) {
    console.log('MongoDB is already connected')
    return;
  }

  try {
    mongoose.connect(`${process.env.MONGO_URI}`,{
      dbName:'kewlpaste'
    })
    isConnected = true;
    console.log('DB connected')
  } catch(err) { 
    console.log(err)
  }
}

export default connectToDB