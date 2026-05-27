require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
// joi validation
//setup ejs
const path = require("path");
//include wrapAsync
const expressError = require("./utils/expresserror.js");
const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
//connect database
const dbUrl = process.env.ATLASDB_URL;
main().then(()=>{
    console.log("connected to DB");
}).catch(err =>{
    console.log(err);
});
async function main(){
    await mongoose.connect(dbUrl);
}
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});
store.on("error",()=>{
    console.log("ERROR in MONGO SESSION STORE",err);
});
const sessionOptions ={
    store,
    secret:process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true, 
    }

};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

 
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
});
// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"student@gmail.com",
//         username:"deltastudent"
//     });
//     let registeredUser = await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// });


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
//Middleware for joi
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
app.get("/", (req, res) => {
    res.redirect("/listings");
});
app.use((req, res, next) => {
    next(new expressError(404, "Page not found"));
});
//-------Custom error hanler--------
app.use((err,req,res,next)=>{
    let {status = 500,message = "Something went wrong"} = err;
    // res.status(status).send(message);
    res.status(status).render("listings/error.ejs",{err});
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});