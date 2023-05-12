var express = require("express")
var router = express.Router();
var controller = require("../controllers")


router.post("/add",controller.Assesment.create)


router.get("/",controller.Assesment.getAll)
router.get("/:id",controller.Assesment.getOne)

router.put("/:id",controller.Assesment.update)
router.delete("/:id",controller.Assesment.delete)


module.exports = router;