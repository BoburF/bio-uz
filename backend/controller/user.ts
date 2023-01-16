import { Request, Response } from "express"
import Users from "../model/Users"
import { hash, compare } from "bcrypt"
import {generateToken,verifyToken} from "../services/token"
import UserInterface from "../interfaces/UserInterface"

const registr = async (req: Request, res: Response) => {
    try {
        const { name, password, email } = req.body

        const passwordShrifted = await hash(password, 10)

        const newUser = new Users({ name, password: passwordShrifted, email })

        await newUser.save()

        res.send("Ro'yhatdan muvaffaqiyatli o'tdingiz")
    } catch (error) {
        console.log(error);
        res.send("Ro'yxatdan o'tib bo'lmadi")
    }
}

const checkEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const emailFounded = await Users.find({ email })
        if (emailFounded) {
            res.send("Email allaqachon mavjud")
        } else {
            res.send("Email mavjud emas")
        }
    } catch (error) {
        console.log(error);
        res.send("Emailni tekshirib bo'lmadi")
    }
}

const login = async (req: Request, res: Response) => {
    try {
        const { name, password, email } = req.body
        const userFounded: UserInterface | null = await Users.findOne({ email, name })

        if(!userFounded){
            return res.send("Foydalanuvchi topilmadi")
        }

        const checkedPassword = await compare(password, userFounded?.password || "")
        if(!checkedPassword){
            return res.send("Parolni xato kirgizdingiz")
        }

        const tokenJWT = generateToken({name, email})

        res.send(tokenJWT)
    } catch (error) {
        console.log(error);
        res.send("Foydalanuvchi topilmadi")
    }
}


export { registr, checkEmail, login }