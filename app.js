// Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override"); // for supporting PUT and DELETE from forms
const ejsMate = require("ejs-mate"); // EJS layout engine for templates
const ExpressError = require("./utils/ExpressError"); // custom error class


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");

// MongoDB connection string
const MONGO_URL = "mongodb://127.0.0.1:27017/fakewanderust1";

// Connect to MongoDB
main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB Connection Error:", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Middleware Setup
app.engine("ejs", ejsMate); // use ejs-mate for layout support
app.set("view engine", "ejs"); // set view engine to ejs
app.set("views", path.join(__dirname, "views")); // set views directory path

app.use(express.urlencoded({ extended: true })); // parse form data in req.body
app.use(methodOverride("_method")); // allow PUT and DELETE methods via query string (_method)
app.use(express.static(path.join(__dirname, "public"))); // serve static files from public/

// Validation middleware for listings
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body); // validate incoming data
  if (error) {
    let errMsg = error.details.map(el => el.message).join(", "); // format error message
    throw new ExpressError(400, errMsg); // throw custom error
  } else {
    next(); // proceed if valid
  }
};



// ROUTES
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

// Home route (basic)
app.get("/", (req, res) => {
  res.send("Hello from WanderLust!");
});



// Global Error Handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  console.error(err); // log error to console
  res.status(status).render("error", { status, message }); // show error page
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
