import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from "../firebase"
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom';

export default function OAuth({ loader }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () => {
        try {
            const auth = getAuth(app)
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })

            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')
        }
        catch (err) {
            console.log("could not login with google", err);
        }

    }
    return (
        <button
            type='button'
            disabled={loader}
            onClick={handleGoogleClick}
            className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
        >
            Continue with google
        </button>)
}
