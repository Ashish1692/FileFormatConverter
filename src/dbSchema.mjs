import mongoose from "mongoose";

const newSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }

});

const newModel = mongoose.model('userData', newSchema);
export default newModel
