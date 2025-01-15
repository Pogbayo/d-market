import express from "express"; // Import Express to create routes.
import User from "../models/User";

const router = express.Router(); // Create a router object.

// Register a new user
router.post("/register", async (req, res) => {
    try {
      const { name, email, password,isAdmin } = req.body; // Extract details from the request body.
      const user = new User({ name, email, password,isAdmin }); // Create a new user instance.
      await user.save(); // Save the user in the database.
      res.status(201).json({ message: "User registered successfully!" }); // Respond with success.
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message }); // Handle errors with a known error type.
      } else {
        res.status(500).json({ error: "An unexpected error occurred." }); // Handle unexpected errors.
      }
    }
  });
  
// Fetch all users

router.get("/", async (req, res) => {
    try {
      const users = await User.find(); // Find all users in the database.
      res.status(200).json(users); // Respond with the list of users.
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message }); // Handle errors with a known error type.
      } else {
        res.status(500).json({ error: "An unexpected error occurred." }); // Handle unexpected errors.
      }
    }
  });
  
  export default router; // Export the router so it can be used in the main app.