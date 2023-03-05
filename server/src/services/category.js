import db from "../models";

// GET ALL CATEGORY
export const getCategoriesSerivce = async () => {
  try {
    const response = await db.Category.findAll({
      raw: true,
      attributes: ["code", "value"],
    });
    return {
      success: response ? true : false,
      message: response ? "OK" : "Failed to get categories.",
      categories: response,
    };
  } catch (error) {
    console.log(error);
  }
};
