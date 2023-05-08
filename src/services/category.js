import db from "../models";

// GET ALL CATEGORY
export const getCategoriesService = async () => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            attributes: ["code", "value"],
        });
        if (response)
            return {
                success: true,
                message: "OK",
                categories: response,
            };
        return false
    } catch (error) {
        console.log(error);
    }
};
