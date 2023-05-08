import * as postService from "../services/post";

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: "Failed at post controller: " + error,
        });
    }
};
export const getPostsLimit = async (req, res) => {
    const {queryPage, queryPrice, queryArea, categoryCode, provinceCode, ...query} =
        req.query;
    try {
        const response = await postService.getPostsLimitService(queryPage, query, {
            queryPrice,
            queryArea,
            categoryCode,
            provinceCode
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed at post controller: " + error,
        });
    }
};
export const getNewPosts = async (req, res) => {
    try {
        const response = await postService.getNewPostService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed at post controller: " + error,
        });
    }
};
