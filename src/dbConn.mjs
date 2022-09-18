import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/ConverterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("MongoDB is connected..."); })
