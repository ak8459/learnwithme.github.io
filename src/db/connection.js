const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/Dynamic_website";
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    console.log("database connection is successful")
}).catch((err)=>{
   console.log(err)

});

