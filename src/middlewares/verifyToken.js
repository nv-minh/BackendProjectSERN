import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {

    let accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) return res.status(401).json({
        error: 1,
        message: 'Missing access token'
    })

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.status(401).json({
            error: 1,
            message: 'Access token expired'
        })
        req.user = user
        next()
    })


}

export default verifyToken