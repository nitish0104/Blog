import mongoose from "mongoose";

const connectMongoDb = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB)
		console.log("connected");
	} catch (error) {
		console.log(error);
	}
}

export default connectMongoDb