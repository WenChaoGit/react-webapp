const {resolve} = require('path')
const {readdirSync,statSync,existsSync}  = require('fs')
const r = path => resolve(__dirname,path);
const srcRoot = r('./src')
const devPath = r('./dev')
const pageDir = r('./src/page')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const getEntry = ()=> {
  let entryMap = {}
  readdirSync(pageDir).forEach(pathname => {
    let fullPathName = r(`./src/page/${pathname}`)
    let stat  = statSync(fullPathName)
    let filename = r(fullPathName + '/index.js');
    if( stat.isDirectory() && existsSync(filename)){
      entryMap[pathname] = filename
    }
  })
  return entryMap
}

module.exports = {
  mode:'development',
  entry:{
    'index':'/Users/hikoming/Desktop/ywc/react-webapp/src/page/index/index.js'
  },
  // entry:getEntry(),
  output:{
    path:devPath,
    filename:'[name].min.js'
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader'],include:srcRoot},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader'],include:srcRoot},
      {test:/.(png|jpg|jpeg)$/,use:['url-loader?limit=8192'],include:srcRoot}
    ]
  }
}