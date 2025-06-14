const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {reviewSchema } = require("../schema.js"); 
const { validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewsControllers = require("../controllers/reviews.js");



// CREATE REVIEW: Add a review to a listing
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewsControllers.createReviews));


// DELETE REVIEW: Remove review from listing and DB
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewsControllers.deleteReview));

module.exports = router;