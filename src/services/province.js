import db from "../models";

// GET ALL PROVINCE
export const getProvincesSerivce = async () => {
    try {
        const response = await db.Province.findAll({
            raw: true,
            attributes: ["code", "value"],
        });
        if (response)
            return {
                success: true,
                message: "OK",
                provinces: response,
            };
        return false
    } catch (error) {
        return error;
    }
};
