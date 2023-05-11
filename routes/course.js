var express = require("express")
var router = express.Router();
var controller = require("../controllers")


router.get("/count",controller.All.summary)
router.post("/add",controller.Course.create)
router.post("/material/add/:id",controller.Course.addMaterial)
router.post("/material/remove/:id",controller.Course.remMaterial)

router.get("/",controller.Course.getAll)
router.get("/:id",controller.Course.getOne)

router.put("/:id",controller.Course.update)
router.delete("/:id",controller.Course.delete)


module.exports = router;