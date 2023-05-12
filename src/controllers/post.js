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
  const {
    queryPage,
    queryPrice,
    queryArea,
    categoryCode,
    provinceCode,
    priceCode,
    areaCode,
    ...query
  } = req.query;
  try {
    const response = await postService.getPostsLimitService(queryPage, query, {
      queryPrice,
      queryArea,
      categoryCode,
      provinceCode,
      priceCode,
      areaCode,
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
    const response = await postService.getPostsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at post controller: " + error,
    });
  }
};
export const createPost = async (req, res) => {
  try {
    const {
      categoryCode,
      title,
      priceNumber,
      areaNumber,
      labelCode,
      ...payload
    } = req.body;
    const { id } = req.user;
    if (!categoryCode || !title || !priceNumber || !areaNumber)
      return res.status(400).json({
        error: 1,
        message: "missing inputs",
      });
    const response = await postService.createPostService(req.body, id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at post controller: " + error,
    });
  }
};
