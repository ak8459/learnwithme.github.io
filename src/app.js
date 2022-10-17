const express =  require("express");
const app = express();
const path = require("path")
 const hbs = require("hbs");
 const port =  process.env.PORT | 3000;
 const  bodyParser = require("body-parser")
 //importing database coonection
 require('./db/connection.js')
 require('./models/details')
  require('./models/slider')
  require('./models/Service')

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
// require routes module
const routes =  require("./routes/main")
app.use("/",routes);
// view engine setup
app.set('view engine',"hbs")
const path1 =  path.join(__dirname, 'views');
app.set('views',path1);

//including partials setup
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static',express.static("public"));






app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

