const mongoose = require('mongoose');

  const Slider = mongoose.Schema({
  title : String,
  subTitle: String,
  imageUrl: String,
  class : String,
});

const sliderData = new mongoose.model('sliderData',Slider);

module.exports = sliderData;
// sliderData.create(
//      [
//         {
//             title : 'JavaScript',
//             subTitle : 'Learn JavaScript By Our Coding Experts Seamlessly',
//             imageUrl:' /static/images/img1.jpg'
//         },
//         {
//             title : 'Python',
//             subTitle : 'Python is One The Most Polpular Language Now A Days',
//             imageUrl:' /static/images/img2.jpg'
//         },
//         {
//             title : 'NodesJs',
//             subTitle : 'Node js is Runtime Environment to Execute JavaScript Outside Browser',
//             imageUrl:' /static/images/img2.jpg'
//         }
//      ]
// )
