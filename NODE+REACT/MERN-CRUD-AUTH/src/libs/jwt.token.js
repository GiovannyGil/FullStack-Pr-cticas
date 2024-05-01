import jwt from 'jsonwebtoken'
import {Token_Secret} from '../config.js'

export function createAccessToken(payload){
    return new Promise  ((resolve, reject) => {
        jwt.sign(payload, Token_Secret, {expiresIn: '1h'}, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })
    })
}