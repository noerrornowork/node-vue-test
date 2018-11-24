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
      // 模拟加载数据延时
      setTimeout(() => {
        res.end(JSON.stringify(hot))
      }, 500);
    })
    return
  }
  if (pathname === '/book') {
    let id = parseInt(query.id)
    switch (req.method) {
      case 'GET':
      if (!isNaN(id)) {
        read((books) => {
          let book = books.find(item => item.bookId === id)
          if (!book) book = {}
          res.end(JSON.stringify(book))
        })
      }else {
        read((books) => {
          res.setHeader("Content-Type", "application/json;charset=utf-8");
          res.end(JSON.stringify(books.reverse()))
        })
      }
        break
      case 'POST':
        let data = ''
        req.on('data', (chunk) => {
          data += chunk
        })
        req.on('end', () => {
          let book = JSON.parse(data)
          read((books) => {
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1
            books.push(book)
            write(books, () => {
              res.end(JSON.stringify(book))
            })
          }) 
        })
        break
      case 'PUT':
      if (id) {
        // 请求体中, 传过来的参数
        let data = ''
        req.on('data', (chunk) => {
          data += chunk
        })
        req.on('end', () => {
          let book = JSON.parse(data)
          read((books) => {
            books = books.map(item => {
              if (item.bookId === id) { //找到id相同的哪一本书
                return book
              }
              return item
            })
            write(books, () => {
              res.end(JSON.stringify(book))
            })
          })
        })
      }
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