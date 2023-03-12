const { signupUser, loginUser, currentUser } = require("../controller/user.controller");
const { fetchuser } = require("../middleware/verifyToken");
const router = require("express").Router();


router.post("/signup", signupUser)

router.post("/login", loginUser)

router.post('/getuser', fetchuser, currentUser);


module.exports = router;