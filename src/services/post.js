import db from "../models";
import { v4 } from "uuid";
import generateCode from "../ultis/generateCode";
import { dataArea, dataPrice } from "../ultis/data";
import { getNumberFromStringV2 } from "../ultis/common";
import moment from "moment";

const { Op } = require("sequelize");

export const getPostsService = async () => {
  try {
    const response = await db.Post.findAll({
      raw: true,
      nest: true,
      include: [
        { model: db.Image, as: "images", attributes: ["image"] },
        {
          model: db.Attribute,
          as: "attributes",
          attributes: ["price", "acreage", "published", "hashtag"],
        },
        { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
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
  { queryPrice, queryArea, categoryCode, provinceCode, priceCode, areaCode }
) => {
  try {
    let offset = !queryPage || +queryPage <= 1 ? 0 : +queryPage - 1;
    let queries = null;
    if (
      queryPrice ||
      queryArea ||
      categoryCode ||
      provinceCode ||
      priceCode ||
      areaCode
    ) {
      queries = {
        ...query,
        priceNumber: queryPrice
          ? { [Op.between]: [queryPrice[0], queryPrice[1]] }
          : undefined,
        areaNumber: queryArea
          ? { [Op.between]: [queryArea[0], queryArea[1]] }
          : undefined,
        categoryCode: categoryCode ? categoryCode : undefined,
        provinceCode: provinceCode ? provinceCode : undefined,
        priceCode: priceCode ? priceCode : undefined,
        areaCode: areaCode ? areaCode : undefined,
      };
      Object.keys(queries).forEach(
        (key) => queries[key] === undefined && delete queries[key]
      );
    }
    const response = await db.Post.findAndCountAll({
      where: queries,
      raw: true,
      nest: true,
      order: [["createdAt", "DESC"]],
      offset: offset * +process.env.LIMIT,
      limit: +process.env.LIMIT,
      include: [
        { model: db.Image, as: "images", attributes: ["image"] },
        {
          model: db.Attribute,
          as: "attributes",
          attributes: ["price", "acreage", "published", "hashtag"],
        },
        { model: db.User, as: "user", attributes: ["name", "zalo", "phone"] },
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
        { model: db.Image, as: "images", attributes: ["image"] },
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
export const createPostService = async (body, userId) => {
  try {
    const attributesId = v4();
    const imagesId = v4();
    const overviewId = v4();
    const labelCode = generateCode(body.label);
    const hashtag = `#${Math.floor(Math.random() * Math.pow(10, 6))}`;
    const currentDate = new Date();

    const response = await db.Post.create({
      id: v4(),
      title: body.title,
      labelCode,
      address: body.address || null,
      attributesId,
      categoryCode: body.categoryCode,
      description: JSON.stringify(body.description) || null,
      userId,
      overviewId,
      imagesId,
      areaCode: body.areaCode || null,
      priceCode: body.priceCode || null,
      provinceCode: body?.province?.includes("Thành phố")
        ? generateCode(body?.province?.replace("Thành phố ", ""))
        : generateCode(body?.province?.replace("Tỉnh ", "")) || null,
      priceNumber: body.priceNumber || null,
      areaNumber: body.areaNumber || null,
    });
    await db.Attribute.create({
      id: attributesId,
      price:
        +body.priceNumber < 1
          ? `${+body.priceNumber * 1000000} đồng/tháng`
          : `${body.priceNumber} triệu/tháng`,
      acreage: `${body.areaNumber} m2`,
      published: moment(new Date()).format("DD/MM/YYYY"),
      hashtag,
    });
    await db.Image.create({
      id: imagesId,
      image: JSON.stringify(body.images),
    });
    await db.Overview.create({
      id: overviewId,
      code: hashtag,
      area: body.label,
      type: body?.category,
      target: body?.target,
      bonus: "Tin thưởng",
      created: currentDate,
      expired: currentDate.setDate(currentDate.getDate() + 10),
    });
    await db.Province.findOrCreate({
      where: {
        [Op.or]: [
          { value: body?.province?.replace("Thành phố ", "") },
          { value: body?.province?.replace("Tỉnh ", "") },
        ],
      },
      defaults: {
        code: body?.province?.includes("Thành phố")
          ? generateCode(body?.province?.replace("Thành phố ", ""))
          : generateCode(body?.province?.replace("Tỉnh ", "")),
        value: body?.province?.includes("Thành phố")
          ? body?.province?.replace("Thành phố ", "")
          : body?.province?.replace("Tỉnh ", ""),
      },
    });
    await db.Label.findOrCreate({
      where: {
        code: labelCode,
      },
      defaults: {
        code: labelCode,
        value: body.label,
      },
    });
    return {
      success: !!response,
      message: response ? "OK" : "Getting posts is failed.",
    };
  } catch (error) {
    return error;
  }
};
