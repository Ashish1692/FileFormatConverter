import mongoose from "mongoose";

mongoose.connect('mongodb+srv://ashmongodb:mongoash762583@cluster0.6kaenjq.mongodb.net/ConverterDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("MongoDB is connected..."); })
