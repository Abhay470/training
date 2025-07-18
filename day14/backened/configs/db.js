const mongoose = require("mongoose");
const url ="mongodb+srv://abhaysaini:abhay@cluster0.qntlna0.mongodb.net/training?retryWrites=true&w=majority&appName=Cluster0"
const connection = mongoose.connect(url)         





module.exports={
    connection
}