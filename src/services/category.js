import db from "../models";

// GET ALL CATEGORY
export const getCategoriesService = async () => {
  try {
    const response = await db.Category.findAll({
      raw: true,
      attributes: ["code", "value"],
    });
    return {
      success: !!response,
      message: response ? "OK" : "Failed to get categories.",
      categories: response,
    };
  } catch (error) {
    console.log(error);
  }
};
