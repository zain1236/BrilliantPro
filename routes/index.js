var express = require('express');
var router = express.Router();

var userRouter = require("./users")
// var productRouter = require("./products")
// var shoppingCartRouter = require("./shoppingcart");
// var unauthUserRouter = require("./unauth.user")
// const passport = require('../config/passport');
// router.use(passport.initialize());

router.use("/users",userRouter)
// router.use("/products",passport.authenticate('jwt', { session: false }),productRouter)
// router.use("/carts",passport.authenticate('jwt', { session: false }),shoppingCartRouter)
// router.use("/users",passport.authenticate('jwt', { session: false }),userRouter)

module.exports = router;