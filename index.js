var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require("multer");

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const upload = multer({ dest: 'uploads/'})


app.post('/api/fileanalyse', upload.single("upfile"), (request, response)=>{
   const {file} = request;
   return response.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size
   })

} );


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
