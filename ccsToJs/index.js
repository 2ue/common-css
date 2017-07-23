/**
 * Created by 2ue on 2017/7/23
 * @function generate the css-js from rest.css file
 */

const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname, '../src/rest.css'),'utf-8').replace(/[\r\n\s]/g, '').replace(/\"/g, "'");
const restCss = 'module.exports = "' + data + '"';

fs.writeFileSync(path.join(__dirname, '../dist/rest-css.js'), restCss, 'utf-8', function (err, data) {
    if (err) throw  err;
    console.log('写入成功！');
});
