const http = require('http')
const fs = require('fs')
const url = require('url')

let sliders = require('./slider.js')

function read (callback) {
  fs.readFile('./mock/book.json', 'utf8', function(err, data){
    if(err || data.length === 0) return callback(err)
    callback(JSON.parse(data))
  })
}
// read(function(books){
//   console.log(books)
// })

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
  let {pathname, query} = url.parse(req.url)
  if(pathname === '/sliders') {
    return res.end(JSON.stringify(sliders))
  }
  if (pathname === '/hot') {
    read(function(books){
      let hot = books.reverse().slice(0, 6)
      res.end(JSON.stringify(hot))
    })
    return
  }
}).listen(3000)

console.log('Your application is running at port 3000......')