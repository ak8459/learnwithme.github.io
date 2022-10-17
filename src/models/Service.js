const {mongoose} = require('mongoose');
const Services =mongoose.Schema({
    icon: String,
      title: String,
    description : String,
    linkText : String,
    link:String,
});
 const services = mongoose.model('service',Services)
module.exports = services
// .create([
//     {
//     icon:'fa-brands fa-accusoft',
//     title:'Provide Best Courses',
//     description :'We Provide Best Courses At Cheapest Price that helps our student learn.',
//     linkText :'https://www.codecademy.com',
//     link:'Check',
//    },

//    {
//     icon:'fa-sharp fa-solid fa-dolphin',
//     title:'Provide Live Classes',
//     description :'We Provide Live Classes with recorded Lectures.',
//     linkText :'https://www.codecademy.com',
//     link:'Check',
//    },

//    {
//     icon:'fa-solid fa-cube',
//     title:'Learn Projects',
//     description :'Learn to Make Project with Our Coding Experts.',
//     linkText :'https://www.codecademy.com',
//     link:'Learn',
//  },



// ])



