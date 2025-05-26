const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError");
const { listingSchema} = require("../schema.js"); 
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingControllers = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudconfig.js");
const upload = multer({ storage })


router.route("/")
.get(wrapAsync(listingControllers.index))
.post(isLoggedIn, upload.single('listing[image]'), validateListing,wrapAsync(listingControllers.createIndex));


 // NEW: Show form to create a new listing
router.get("/new",isLoggedIn, listingControllers.renderNewForm);


 router.route("/:id")
.get(wrapAsync(listingControllers.showIndex))
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingControllers.updateIndex))
.delete(isLoggedIn,isOwner, wrapAsync(listingControllers.deleteIndex));










// EDIT: Show edit form for a listing
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingControllers.editIndex));



module.exports = router;