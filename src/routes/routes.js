const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const HomePageController = require("../controllers/HomePageController");
const verifyJWT = require("../middlewares/VerifyAuth");
const ValidationClients = require("../middlewares/clientAuth");
const ClientsController = require("../controllers/ClientsController");



router.get("/", HomeController.read);
router.post("/", HomeController.read);

router.get("/home", verifyJWT, HomePageController.read);
router.get("/home/:id", verifyJWT, ClientsController.read);
router.post("/home", verifyJWT, ValidationClients, HomePageController.create);
router.delete("/home/:id", verifyJWT, HomePageController.delete);



module.exports = router;