const Jimp = require('jimp');
var image = process.argv[2]
var result = process.argv[3]

Jimp.read(image, function(err, img) {
  if(err) throw err;
  img.resize(512,512)
     .quality(90)
     .write(__dirname + `/${result}`)

})
