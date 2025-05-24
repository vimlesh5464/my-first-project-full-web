let Listing = require("./models/listing");
let Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next)=> {
  if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to create listing");
    return res.redirect("/login");
  }
  next();
}
module.exports.saveRedirectUrl = (req, res, next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner = async (req, res, next)=> {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if(!listing.owner.equals(res.locals.currentUser._id)){
    req.flash("error", "You are not owner ");
    return res.redirect(`/listings/${id}`);
  }
  next();
}


module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body); // validate incoming data
  if (error) {
    let errMsg = error.details.map(el => el.message).join(", "); // format error message
    throw new ExpressError(400, errMsg); // throw custom error
  } else {
    next(); // proceed if valid
  }
};

module.exports.validateReview = (req, res, next) => {
  let {error} = reviewSchema.validate(req.body);
    if(error){
      let errMsg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(404, errMsg);
    }else{
      next();
    }
}

module.exports.isReviewAuthor = async (req, res, next)=> {
  let {id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  
  if (!review.author.equals(res.locals.currentUser._id)) {
    req.flash("error", "You don't have permission to do that!");
    return res.redirect(`/listings/${id}`);
  }
  next();
}