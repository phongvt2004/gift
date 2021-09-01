const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const imageToAscii = require("image-to-ascii");
const handlebars = require('express-handlebars');
const { resolve } = require('path');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Nhập tên của người iu bạn:  `, name => {
    name = name.toLowerCase()
    // Ten
    if(name.includes('linh')) {
        console.log('Đúng rồi')
        readline.question(`Ngày sinh của người iu là bao nhiu nè:  `, date => {
            // Ngay sinh nhat
            if(date == '02/09/2004') {
                console.log('                            Đúng rồi. Chúc mừng sinh nhật bé iu nè')
                var printImg = new Promise((resolve, reject) => {
                    for(var i = 1; i<=11; i++) {
                        if ( i == 11) {
                            //Sua duoi cho dung
                            imageToAscii(`./${i}.jpeg`, {
                                pxWidth: 4,
                                size: {
                                    height: 50,
                                    width: 80
                                }
                            }, (err, converted) => {
                                console.log(err || converted);
                            });
                        } else {
                            imageToAscii(`./${i}.jpg`, {
                                pxWidth: 4,
                                size: {
                                    height: 50,
                                    width: 80
                                }
                            }, (err, converted) => {
                                console.log(err || converted);
                            });
                        }
                    }
                })
                
            }
        })
    }
  })
  

app.use('/api', cors())


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'img')));