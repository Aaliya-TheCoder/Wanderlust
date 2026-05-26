const User = require("../models/user.js");


module.exports.renderSignup = (req,res)=>{
    res.render("users/signup.ejs");

};
module.exports.renderLogin = (req,res,next)=>{
    res.render("users/login.ejs");

};
module.exports.userSignup=async(req,res,next)=>{
    try{
            let {username,email,password} = req.body;
    const newUser = new User({email,username});
    const registereduser = await User.register(newUser,password);
    console.log(registereduser);
    req.login(registereduser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","user was registered successfully");
    res.redirect("/listings");
    })
    }
    catch(e){
       req.flash("error",e.message);
       res.redirect("/signup");

    }

};
module.exports.userLogin = async(req,res)=>{
    req.flash("success","Welcome back to wanderlust!");
    res.redirect(res.locals.redirectUrl || "/listings");

};
module.exports.userLogout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out successfully");
        res.redirect("/listings");

    });
};