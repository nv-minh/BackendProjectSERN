import db from "../models";

// GET ALL PROVINCE
export const getProvincesSerivce = async () => {
  try {
    const response = await db.Province.findAll({
      raw: true,
      attributes: ["code", "value"],
    });
    return {
      success: !!response,
      message: response ? "OK" : "Failed to get provinces.",
      provinces: response,
    };
  } catch (error) {
    return error;
  }
};
