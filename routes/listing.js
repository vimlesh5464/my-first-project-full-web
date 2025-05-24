const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const { listingSchema} = require("../schema.js"); 
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing} = require("../middleware.js");



// INDEX: Show all listings
router.get("/",isLoggedIn, wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { listings: allListings }); // render index page with listings
}));

// NEW: Show form to create a new listing
router.get("/new",isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});


// SHOW: Show individual listing
router.get("/:id",isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author",},}).populate("owner"); // populate reviews
  if(!listing){
    req.flash("error", " Listing you request for does not exits");
    res.redirect("/listings")
  }
  console.log(listing)
  res.render("listings/show.ejs",  { listing});
}));

// CREATE: Add a new listing
router.post("/", isLoggedIn,validateListing, wrapAsync(async (req, res, next) => {
  const newListing = new Listing(req.body.listing); // create new listing from form data
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New Listing Add");
  res.redirect("/listings"); // redirect to all listings
}));

// EDIT: Show edit form for a listing
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error", " Listing you request for does not exits");
    return res.redirect("/listings")
  }
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE: Update listing info
router.put("/:id",isLoggedIn,isOwner, validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // update listing with spread operator
  req.flash("success", " Listing update");
  res.redirect(`/listings/${id}`); // redirect to updated listing
}));

// DELETE: Delete listing
router.delete("/:id",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id); // delete from DB
  req.flash("success", " Listing delete");
  res.redirect("/listings"); // redirect to listings
}));

module.exports = router;