import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.config";
import UseAxiosPublic from "../Axios/UseAxiosPublic";


export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState()
    const [loading,setLoading]=useState(true)
    // const axiosPublic=UseAxiosPrivate()

    const creatuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateuser=(userInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }
    const updateprofile=(name,photoURL,phoneNumber)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photoURL,phoneNumber:phoneNumber

        })
    }
    const signinuser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const provider = new GoogleAuthProvider();
    const googlelogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

 

    const signout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
            setuser(currentuser)
            setLoading(false) 
            if(currentuser){
                const axiosPublic=UseAxiosPublic()
                const userinfo={email:currentuser.email}
                axiosPublic.post('jwt',userinfo)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('token')
            }
        })
        return()=>{
            return unsubscribe()
        }
    },[])

    const info={
        user,loading,signinuser,creatuser,googlelogin,signout,updateuser,updateprofile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;