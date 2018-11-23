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

function write (data, callback) {
  fs.writeFile('./mock/book.json', JSON.stringify(data), callback)
}

http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  let {pathname, query} = url.parse(req.url, true) //加true把query转化为对象
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
  if (pathname === '/book') {
    let id = parseInt(query.id)
    switch (req.method) {
      case 'GET':
      if (id) {
        read((books) => {
          book = books.filter(item => item.bookId === id)
          console.log(book)
          res.end(JSON.stringify(book))
        })
      }else {
        read((books) => {
          res.end(JSON.stringify(books.reverse()))
        })
      }
        break
      case 'POST':
        break
      case 'PUT':
      // 请求体中, 传过来的参数
        let data = ''
        req.on('data', (chunk) => {
          data += chunk
        })
        req.on('end', () => {
          data = JSON.parse(data)
        })
        read((books) => {
          // 将新添的数据自增1
          if (books && books.length > 0) {
            data.bookId = books.length + 1
            console.log(data.bookId)
          }
          books.push(data)
          write(books, () => {
            res.end(JSON.stringify())
          })
        })
        break
      case 'DELETE':
      read((books) => {
        books = books.filter(item => item.bookId !== id)
        write(books, () => {
          res.end(JSON.stringify())
        })
      })
        break
    }
    return
  }
}).listen(3000)

console.log('Your application is running at port 3000......')