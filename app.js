// Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override"); // for supporting PUT and DELETE from forms
const ejsMate = require("ejs-mate"); // EJS layout engine for templates
const ExpressError = require("./utils/ExpressError"); // custom error class
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user");

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

const sessionOption = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};

app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  // res.locals.currUser = req.user;
  next();
});


// ROUTES
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


// Home route (basic)
app.get("/", (req, res) => {
  res.send("Hello from WanderLust!");
});



// Global Error Handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message); // <-- just send a response
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
