import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.token.js'

export const register = async (req, res) => {
    const { email, password, username } = req.body
    // console.log(email, password, username)
    try {

        const userfound = await User.findOne({email})
        if(userfound) return res.status(400).json(['Email already exists'])

        const passwordhash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordhash
        })
        const userSave = await newUser.save()
        const token = await createAccessToken({ _id: userSave._id})
        res.cookie('token', token)

        res.json({
            _id: userSave._id,
            username: userSave.username,
            email: userSave.email
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const login = async (req, res) => {
        const { email, password } = req.body
        // console.log(email, password, username)

    try {
        const userfound = await User.findOne({email})
        if(!userfound) return res.status(400).json({message: 'User not found'})

        const isMatch = await bcrypt.compare(password, userfound.password)
        if(!isMatch) return res.status(400).json({message: 'Invalid password'})

        const token = await createAccessToken({ _id: userfound._id})
        res.cookie('token', token)

        res.json({
            _id: userfound._id,
            username: userfound.username,
            email: userfound.email
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.status(200).json({message: 'Logged out'})
}


export const profile = async (req, res) => {
    const userFound = await User.findById(req.user._id)

    if(!userFound) return res.status(400).json({message: 'User not found'})

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })
}