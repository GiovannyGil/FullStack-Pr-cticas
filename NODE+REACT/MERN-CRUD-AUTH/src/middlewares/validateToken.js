import jwt from 'jsonwebtoken'
import {Token_Secret} from '../config.js'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies

    if (!token) {
        return res.status(401).json({message: "No Token, Unauthorized"})
    }

    jwt.verify(token, Token_Secret, (err, user) => {
        if (err) {
            return res.status(401).json({message: "Invalid Token"})
        }
        req.user = user
        // console.log(user)
        next()
    })
}