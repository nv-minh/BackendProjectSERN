import * as services from "../services/category";

export const getCategories = async (req, res) => {
  try {
    const response = await services.getCategoriesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed at categories controller: " + error,
    });
  }
};
