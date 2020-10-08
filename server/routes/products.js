const express = require("express");
const router = express.Router();

const productsCtrl = require("../controllers/productsController");

router.get("/", productsCtrl.getProducts);

router.get("/:id", productsCtrl.getSingeProduct);

router.post("/", productsCtrl.addProduct);

router.put("/:id", productsCtrl.updateProduct);

module.exports = router;
