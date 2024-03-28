import mongoose from "mongoose";
// import ProfileImage from './

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: '/images/profileImg.png'
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User 