import express from "express";
import * as postController from "../controllers/post";
import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.get("/all", postController.getPosts);
router.get("/limit", postController.getPostsLimit);
router.get("/new-post", postController.getNewPosts);

router.use(verifyToken);
router.post("/create-post", postController.createPost);
router.get("/limit-admin", postController.getPostLimitAdmin);
router.post("/update-post", postController.updatePost);
router.post("/delete-post", postController.deletePost);

export default router;
