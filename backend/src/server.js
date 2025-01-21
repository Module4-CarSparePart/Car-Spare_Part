import express from 'express';   // Use ES Module import
import cors from 'cors';         // Import the cors package
import connectDB from './config/db.js';  // Use ES Module import for custom modules
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';  // Use ES Module import for the router
import productrouter from './routes/productRoute.js';
import cartrouter from './routes/cartRouter.js';

dotenv.config();  // Load environment variables

const app = express();
const port = 4000;

// Middleware
app.use(express.json());  // Parse incoming requests with JSON payload
app.use(cors());          // Enable CORS for the frontend (localhost:5173 in your case)

// Connect to the database
connectDB();

// Use the userRouter for authentication and user-related routes
app.use("/api/user", userRouter);

app.use("/api/product", productrouter);

app.use("/api/cart", cartrouter);
// Basic route for testing
app.get('/', (req, res) => {
    console.log("hello world!");
    res.send("Server is running!");
});

// Start the server
app.listen(port, (error) => {
    if (error) {
        console.log("Error in starting server");
        process.exit(1);
    }
    console.log(`Server running at http://localhost:${port}`);
});
