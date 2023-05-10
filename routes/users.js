var express = require("express")
var router = express.Router();
var controller = require("../controllers")


router.get("/",controller.User.getAll)
router.get("/:id",controller.User.getOne)

router.put("/:id",controller.User.update)
router.delete("/:id",controller.User.delete)


module.exports = router;