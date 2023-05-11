var express = require("express")
var router = express.Router();
var controller = require("../controllers")


router.post("/add",controller.Material.create)

router.get("/",controller.Material.getAll)
router.get("/:id",controller.Material.getOne)

router.put("/:id",controller.Material.update)
router.delete("/:id",controller.Material.delete)


module.exports = router;