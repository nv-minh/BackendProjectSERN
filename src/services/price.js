import db from "../models";

// GET ALL PRICE
export const getPricesSerivce = async () => {
  try {
    const response = await db.Price.findAll({
      raw: true,
      attributes: ["code", "value", "order"],
    });
    return {
      success: !!response,
      message: response ? "OK" : "Failed to get prices.",
      prices: response,
    };
  } catch (error) {
    return error;
  }
};
