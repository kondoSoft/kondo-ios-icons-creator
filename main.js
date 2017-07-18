const Jimp = require('jimp');
const Sizes = require('./sizes')
const fs = require('fs');
const path = require('path')
var image = process.argv[2]
var ext = path.extname(image)

//only accepts png files
if(ext == '.png'){
  //Create folder and icons
  fs.mkdir(__dirname + `/${Sizes.ios_image.folder_name}`, (err) => {
    if(err)throw err;
    Object.keys(Sizes.ios_image.images).map( (key) => {
      Jimp.read(image, (err, img)=>{
        if(err) throw err;
        img.resize(Sizes.ios_image.images[key],Jimp.AUTO)
        img.quality(100)
        img.write(`./${Sizes.ios_image.folder_name}` + `/${key}.png`)
      })
    })
  })
  //Create folder and Launch Image
  fs.mkdir(__dirname + `/${Sizes.launch_image.folder_name}`, (err) => {
    if(err)throw err;
    Object.keys(Sizes.launch_image.images).map( (key) => {
      var width = Sizes.launch_image.images[key][0]
      var height = Sizes.launch_image.images[key][1]
      Jimp.read(image, (err,img) => {
        if(err) throw err;
        img.resize(width,height)
        img.quality(100)
        img.write(`./${Sizes.launch_image.folder_name}` + `/${key}.png`)
      })
    })
  })
}else {
  console.log('Solo admite archivos PNG');
}
