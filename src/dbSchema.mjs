import mongoose from "mongoose";

const newSchema = mongoose.Schema({
    secretetoken: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }

});

const newModel = mongoose.model('converter', newSchema);
export default newModel
