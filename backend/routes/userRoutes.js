const authController = require("../controller/authController");
const express = require("express");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.get("/verify/:token", authController.verify);







router.post("/logout",authController.protect,authController.logout);
router.post("/updatePassword",authController.protect,authController.updatePassword);




// here is our entire post route and its logic

//get all post 

//post the post

router.post("/user/post")

module.exports = router;
