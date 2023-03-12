const Post = require("../models/postDetails.models");




//create a new Post

const newPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.send("Post Created Successfully....!");
    } catch (err) {
        res.status(401).send(err)
    }
};


// get all Posts

const getPosts = async (req, res) => {
    try {
        const allPosts = await Post.find();

        res.status(200).send(allPosts);

    } catch (err) {
        res.status(401).send(err);
    }
};




//delete Post from database


const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.deleteOne({ _id: id });
        res.send("Post Deleted Succesfilly....!");
    } catch (e) {
        res.status(404).send(e);
    }
};


// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    
// });








module.exports = { newPost, getPosts, deletePost };