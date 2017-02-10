const Jimp = require('jimp');
const Sizes = require('./sizes')
const fs = require('fs');
const path = require('path')
var image = process.argv[2]
var ext = path.extname(image)

//only accepts png files
if(ext == '.png'){
  //Create folder and icons
  fs.mkdir(__dirname + `/${Sizes.android_image.folder_name}`, (err) => {
    if(err)throw err;
    Object.keys(Sizes.android_image.images).map( (key) => {
      Jimp.read(image, (err, img)=>{
        if(err) throw err;
        img.resize(Sizes.android_image.images[key],Jimp.AUTO)
        img.quality(100)
        img.write(`./${Sizes.android_image.folder_name}` + `/${key}.png`)
      })
    })
  })
}else {
  console.log('Solo admite archivos PNG');
}
