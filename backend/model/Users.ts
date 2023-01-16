import {Schema, model} from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    socialLinks: [
        {
            socialName: {
                type: String,
                requireed: true
            },
            link: {
                type: String,
                required: true
            }
        }
    ],
    bcgColor: {
        type: String,
        required: true,
        default: '#7979ff'
    },
    bcgImg: {
        type: String
    }
})

export default model("users", userSchema)