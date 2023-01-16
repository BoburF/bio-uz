import { sign, verify } from "jsonwebtoken"
const secretKey = process.env.KEY || ""

const generateToken = (user: {email: string, name: string}) => {
    return sign(user, secretKey, {
        expiresIn: "7d"
    })
}

const verifyToken = async(token: string)=>{
    return verify(token, secretKey, (err, decodedToken)=>{
        if(err){
            return err
        }else{
            return decodedToken
        }
    })
}

export {generateToken, verifyToken}