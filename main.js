const Jimp = require('jimp');
const Sizes = require('./sizes')
const fs = require('fs');
const path = require('path')
var image = process.argv[2]
var ext = path.extname(image)

Jimp.read(image,(err, img) => {
  if(err) throw err;
  if(ext == '.png'){
    fs.mkdir(__dirname + `/${Sizes.ios_image.folder_name}`, (err) => {
      if(err)throw err;
      Object.keys(Sizes.ios_image.images).map( (key) => {
        img.resize(Sizes.ios_image.images[key],Jimp.AUTO)
        img.quality(100)
        img.write(`./${Sizes.ios_image.folder_name}` + `/${key}.png`)
      })
      Object.keys(Sizes.launch_image.images).map( (key) => {
        var width = Sizes.launch_image.images[key][0]
        var height = Sizes.launch_image.images[key][1]
        img.resize(width,height)
        img.quality(100)
        img.write(`./${Sizes.ios_image.folder_name}` + `/${key}.png`)
      })
    })
  }else {
    console.log('Solo admite PNG');
  }
})
