import mongoose from "mongoose";

const connecToDatabase = async () => {
    try {
        console.log("📡 Connecting to MongoDB...");
        const conn = await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
      } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
      }
    };

export default connecToDatabase;
