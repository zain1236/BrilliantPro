var express = require('express');
var router = express.Router();

var userRouter = require("./users")
var materialRouter = require("./material")
var courseRouter = require("./course")
var assesmentRouter = require("./assesment")
// var unauthUserRouter = require("./unauth.user")
// const passport = require('../config/passport');
// router.use(passport.initialize());

router.use("/users",assesmentRouter)
router.use("/assesments",userRouter)
router.use("/materials",materialRouter)
router.use("/courses",courseRouter)


router.use("/",(req,res)=>{
    res.send("I am working");
})



// router.use("/products",passport.authenticate('jwt', { session: false }),productRouter)
// router.use("/carts",passport.authenticate('jwt', { session: false }),shoppingCartRouter)
// router.use("/users",passport.authenticate('jwt', { session: false }),userRouter)

module.exports = router;