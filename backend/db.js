const mongoose=require('mongoose');
const mongoURI="mongodb+srv://ranjan:ranjan_1990@cluster0.acdir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectTOMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to MongoDB successfully")
    })
}

module.exports=connectTOMongo;