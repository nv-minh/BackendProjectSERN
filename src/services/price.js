import db from "../models";

// GET ALL PRICE
export const getPricesSerivce = async () => {
    try {
        const response = await db.Price.findAll({
            raw: true,
            attributes: ["code", "value", "order"],
        });
        if (response)
            return {
                success: true,
                message: "OK",
                prices: response,
            };
        return false
    } catch (error) {
        return error;
    }
};
