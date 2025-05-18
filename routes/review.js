const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {reviewSchema } = require("../schema.js"); 



// Validation middleware for reviews
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
// CREATE REVIEW: Add a review to a listing
router.post("/", validateReview, wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id); // find listing
  let newReview = new Review(req.body.review); // create new review from form
  listing.reviews.push(newReview); // push review to listing
  await newReview.save(); // save review
  await listing.save(); // save updated listing
  res.redirect(`/listings/${listing._id}`); // redirect to listing page
}));

// DELETE REVIEW: Remove review from listing and DB
router.delete("/:reviewId", wrapAsync(async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // pull review from listing
  await Review.findByIdAndDelete(reviewId); // delete review
  res.redirect(`/listings/${id}`); // redirect to listing
}));

module.exports = router;