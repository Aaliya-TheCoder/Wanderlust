const express = require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const passport = require("passport");
const {isLoggedIn,isOwner,validatelisting} = require("../middleware.js");
const listingController=require("../controller/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })
//Index and edit route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single('listing[image]'),validatelisting,wrapAsync(listingController.addlisting)
);
// Create Route
router.get("/new",isLoggedIn,listingController.renderNewForm);
//show delete and update route
router
.route("/:id")
.get(wrapAsync(listingController.show))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validatelisting,wrapAsync(listingController.updatelisting))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.deletelisting));


//add new listing
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editlisting));

module.exports = router;
