const mongoose = require('mongoose');

const Contact = mongoose.Schema({
    email:{
       type: String,
       required:[true,'email is invalid'] ,
    },
    contactNumber:{
    type: String,
    required : true,
  },
  query:String,
})

module.exports = new mongoose.model('contact',Contact);

