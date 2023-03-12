const { newPost, getPosts, deletePost } = require("../controller/post.controller");
const { verifyToken, verifyTokenAndAdmin } = require("../middleware/verifyToken");

const router = require("express").Router();

//routes to get course and using middleware to verify user
router.post("/course", verifyTokenAndAdmin, newPost)

// get all Posts
router.get("/course", verifyToken, getPosts)

//routes to delete course and using middleware to verify user is admin
router.delete('/:id', verifyTokenAndAdmin, deletePost);


module.exports = router;