import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { userName, email, password } = req.body;

    const userNameDuplicate = await User.findOne({ userName })
    if(userNameDuplicate) return next(errorHandler(401, 'Username already Exists'));

    const emailDuplicate = await User.findOne({ email })
    if(emailDuplicate) return next(errorHandler(401, 'Email already Exists'));

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ userName, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json({ message: "User created successfully", success: true })
    }
    catch (error) {
        next(errorHandler(300, "something went wrong"))
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) return next((errorHandler(404, "User not found")))
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next((errorHandler(401, "Invalid Credentials")))
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: hashedPassword, ...rest } = validUser._doc
        const expiryDate = new Date(Date.now() + 3600000)
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest)
    }
    catch (err) {
        next(err)
    }
}

export const google = async (req, res, next) => {
    const { name, email, photo } = req.body
    try {
        const validUser = await User.findOne({ email })
        if (validUser) {
            const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
            const { password: hashedPassword, ...rest } = validUser._doc
            const expiryDate = new Date(Date.now() + 3600000)
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest)
        }
        else {
            const generatedPassword = Math.random().toString(36).slice(-8)
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10)
            const newUser = new User({ userName: name.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 10000), email, password: hashedPassword, profilePicture: photo });
            await newUser.save()
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
            const { password, ...rest } = newUser._doc
            const expiryDate = new Date(Date.now() + 3600000)
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest)
        }
    }
    catch (err) {
        next(err)
    }
}

export const signout = (req,res) => {
    res.clearCookie('access_token').status(200).json('Signout Success')
}