const {resolve} = require('path')

const r = path => resolve(__dirname,path);
const srcRoot = r('./src')
const devPath = r('./dev')
const pageDir = r('./src/page')

const getEntry = ()=> {

}
module.exports = {
  entry:{},
  output:{},
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader'],include:srcRoot},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader'],include:srcRoot},
    ]
  }
}