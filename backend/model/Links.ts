import {Schema, model} from "mongoose"

const linkSchema = new Schema({
    realLink: {
        type: String,
        required: true
    },
    shortLink: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
})

export default model("links", linkSchema)