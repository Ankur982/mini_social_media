const { signupUser, loginUser } = require("../controller/user.controller");

const router = require("express").Router();


router.post("/signup", signupUser)

router.post("/login", loginUser)




module.exports = router;