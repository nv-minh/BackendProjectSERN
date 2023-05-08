import db from '../models'

// GET CURRENT
export const getOne = async (id) => {
    try {
        const response = await db.User.findOne({
            where: {id},
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        if (response)
            return {
                success: true,
                message: "OK",
                user: response,
            };
        return false
    } catch (error) {
        console.log(error)
    }
}