const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {reviewSchema } = require("../schema.js"); 
const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");




// CREATE REVIEW: Add a review to a listing
router.post("/", isLoggedIn, validateReview, wrapAsync(async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  await newReview.save(); // Save the review first
  listing.reviews.push(newReview); // Then push the saved review
  await listing.save(); // Save the updated listing

  req.flash("success", "Review added successfully");
  res.redirect(`/listings/${listing._id}`);
}));


// DELETE REVIEW: Remove review from listing and DB
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // pull review from listing
  await Review.findByIdAndDelete(reviewId); // delete review
  req.flash("success", " Review delete");
  res.redirect(`/listings/${id}`); // redirect to listing
}));

module.exports = router;