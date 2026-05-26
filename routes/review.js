const express = require("express");
const Review = require("../Models/review.js");
const router = express.Router({mergeParams: true});
const wrapAsync= require("../utils/wrapAsync.js");
const expressError = require("../utils/expresserror.js");
const Listing = require("../Models/listing.js");
const {validatereview,isLoggedIn,isreviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/review.js");

//Reviews
//Post Route
router.post("/",isLoggedIn,validatereview,wrapAsync(reviewController.createReview));
//Delte review Route
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsync(reviewController.destroyReview));
module.exports=router;