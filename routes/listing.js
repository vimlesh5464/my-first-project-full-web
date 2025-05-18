const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const { listingSchema} = require("../schema.js"); 
const Listing = require("../models/listing");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body); // validate incoming data
  if (error) {
    let errMsg = error.details.map(el => el.message).join(", "); // format error message
    throw new ExpressError(400, errMsg); // throw custom error
  } else {
    next(); // proceed if valid
  }
};

// INDEX: Show all listings
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { listings: allListings }); // render index page with listings
}));

// NEW: Show form to create a new listing
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// SHOW: Show individual listing
router.get("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews"); // populate reviews
  res.render("listings/show.ejs", { listing });
}));

// CREATE: Add a new listing
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
  const newListing = new Listing(req.body.listing); // create new listing from form data
  await newListing.save();
  res.redirect("/listings"); // redirect to all listings
}));

// EDIT: Show edit form for a listing
router.get("/:id/edit", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE: Update listing info
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // update listing with spread operator
  res.redirect(`/listings/${id}`); // redirect to updated listing
}));

// DELETE: Delete listing
router.delete("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id); // delete from DB
  res.redirect("/listings"); // redirect to listings
}));

module.exports = router;