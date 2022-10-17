const mongoose = require('mongoose');

const Detail = mongoose.Schema({
brandName : String,
brandIconUrl : String,
links:[
    {
    label: String,
     url: String,
    },
],
})


const detail = new mongoose.model("detail",Detail);
module.exports = detail;
// module.exports = detail.create({
//     brandName : 'The info solution',
//     brandIconUrl : "https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg",
//     links :[
//         {
//             label: 'Home',
//             url:"/"
//         },
//         {
//             label: 'Services',
//             url:"/services"
//         },
//         {
//             label: 'Gallery',
//             url:"/gallery"
//         },
//         {
//             label: 'About',
//             url:"/aboout"
//         }
//     ]
// })


