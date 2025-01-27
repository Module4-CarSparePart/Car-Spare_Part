import MongoStore from "connect-mongo";
import dotenv from 'dotenv';
dotenv.config(); 

const sessionConfig = {
  secret: "your-secret-key", // Replace with a secure secret key
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://shelkem402:Mayur%402025@cluster0.if84a.mongodb.net/`, // Replace with your MongoDB connection string
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true, // Prevent client-side access to the cookie
    secure: false, // Set to true if using HTTPS
  },
};

export default sessionConfig;
