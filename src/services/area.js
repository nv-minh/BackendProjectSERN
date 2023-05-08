import db from "../models";

// GET ALL AREA
export const getAreasSerivce = async () => {
    try {
        const response = await db.Area.findAll({
            raw: true,
            attributes: ["code", "value", "order"],
        });
        if (response)
            return {
                success: true,
                message: "OK",
                areas: response,
            };
        return false
    } catch (error) {
        return error;
    }
};
