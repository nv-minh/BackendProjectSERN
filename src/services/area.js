import db from "../models";

// GET ALL AREA
export const getAreasSerivce = async () => {
  try {
    const response = await db.Area.findAll({
      raw: true,
      attributes: ["code", "value", "order"],
    });
    return {
      success: !!response,
      message: response ? "OK" : "Failed to get areas.",
      areas: response,
    };
  } catch (error) {
    return error;
  }
};
