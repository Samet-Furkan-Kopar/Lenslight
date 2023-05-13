import mongoose from "mongoose";

const {Schema} = mongoose

const photoSchema = new Schema({
    name: {
        type:String,
        required: true,
        trim: true,//başta ve sondaki boşlukları almaz
    },
    description: {
        type:String,
        required: true,
        trim: true,
    },
    uploadedAt: {
        type:String,
        default: Date.now,
    },
});
const Photo = mongoose.model("Photo",photoSchema);
export default Photo;