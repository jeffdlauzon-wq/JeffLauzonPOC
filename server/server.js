const express = require("express");
const path = require("path");
const foodStore = require("./foodStore");

const app = express();

// Parses incoming JSON request bodies.
app.use(express.json());

// Serves the frontend files from the public folder.
app.use(express.static(path.join(__dirname, "../public")));

// Returns all five food items as JSON.
app.get("/foods", (req, res) => {
    const foods = foodStore.getAll();
    console.log("GET /foods requested:", foods);
    res.json(foods);
});

// Returns a 404 response for routes that do not exist.
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Uses the hosting platform's port or port 3000 locally.
// Starts the server only when this file is run directly.
if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Allows the tests to use the app without starting the server.
module.exports = app;