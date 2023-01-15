import db from "../models";

// GET ALL CATEGORY
export const getCategoriesSerivce = async () => {
  try {
    const response = await db.Category.findAll({
      raw: true,
    });
    resolve({
      err: response ? 0 : 1,
      msg: response ? "OK" : "Failed to get categories.",
      response,
    });
  } catch (error) {
    reject(error);
  }
};
