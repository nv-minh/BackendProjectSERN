import db from "../models";

const {Op} = require("sequelize");

export const getPostsService = async () => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            include: [
                {model: db.Image, as: "images", attributes: ["image"]},
                {
                    model: db.Attribute,
                    as: "attributes",
                    attributes: ["price", "acreage", "published", "hashtag"],
                },
                {model: db.User, as: "user", attributes: ["name", "zalo", "phone"]},
            ],
            attributes: ["id", "title", "star", "address", "description"],
        });
        return {
            success: !!response,
            message: response ? "OK" : "Getting posts is failed.",
            posts: response,
        };
    } catch (error) {
        return error;
    }
};
export const getPostsLimitService = async (
    queryPage,
    query,
    {queryPrice, queryArea, categoryCode, provinceCode}
) => {
    try {
        let offset = !queryPage || +queryPage <= 1 ? 0 : +queryPage - 1;
        let queries = null
        if (queryPrice || queryArea || categoryCode || provinceCode) {
            queries = {
                ...query,
                priceNumber: {[Op.between]: [queryPrice[0], queryPrice[1]]},
                areaNumber: queryArea ? {[Op.between]: [queryArea[0], queryArea[1]]} : undefined,
                categoryCode: categoryCode ? categoryCode : undefined,
                provinceCode: provinceCode ? provinceCode : undefined,
            };
            Object.keys(queries).forEach(
                (key) => queries[key] === undefined && delete queries[key]
            );
        }
        const response = await db.Post.findAndCountAll({
            where: queries,
            raw: true,
            nest: true,
            offset: offset * +process.env.LIMIT,
            limit: +process.env.LIMIT,
            include: [
                {model: db.Image, as: "images", attributes: ["image"]},
                {
                    model: db.Attribute,
                    as: "attributes",
                    attributes: ["price", "acreage", "published", "hashtag"],
                },
                {model: db.User, as: "user", attributes: ["name", "zalo", "phone"]},
            ],
            attributes: ["id", "title", "star", "address", "description"],
        });
        return {
            success: !!response,
            message: response ? "OKE" : "Getting posts is failed.",
            response,
        };
    } catch (error) {
        return error;
    }
};

export const getNewPostService = async () => {
    try {
        const response = await db.Post.findAll({
            raw: true,
            nest: true,
            offset: 0,
            order: [["createdAt", "DESC"]],
            limit: +process.env.LIMIT,
            include: [
                {model: db.Image, as: "images", attributes: ["image"]},
                {
                    model: db.Attribute,
                    as: "attributes",
                    attributes: ["price", "acreage", "published", "hashtag", "createdAt"],
                },
            ],
            attributes: [
                "id",
                "title",
                "star",
                "createdAt",
                "description",
                "address",
            ],
        });
        return {
            success: !!response,
            message: response ? "OK" : "Getting posts is failed.",
            posts: response,
        };
    } catch (error) {
        return error;
    }
};
