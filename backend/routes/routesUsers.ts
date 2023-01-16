import {Router} from "express"
import {registr, checkEmail, login} from "../controller/user"
const router = Router()

router.post("/check/email", checkEmail)
router.post("/login", login)
router.post("/register", registr)

export default router