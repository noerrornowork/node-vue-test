const express = require('express')
const url = require('url')
const db = require('../model/db.js')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('index.html')
})

router.get('/sliders', (req, res) => {
	db.slider.find((err, data) => {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.send(data)
	})
})

router.get('/hot', (req, res) => {
	db.hot.find((err, data) => {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.send(data)
	})
})

router.use('/book', async (req, res, next) => {
		// 解析url路径
	let {pathname, query} = url.parse(req.url, true)

	let id = query.id
	
	switch (req.method) {
		case 'GET':
			if (id) {
				await db.book.findById(id, (err, data) => {
					if (err) {
						return res.status(500).send('服务器忙,请稍后重试')
					}
					res.send(JSON.stringify(data))
				})
			} else {
				await db.book.find((err, data) => {
					if (err) {
						return res.status(500).send('服务器忙,请稍后重试')
					}
					res.send(JSON.stringify(data.reverse()))
				})
			}
			break
		case 'POST':
			let body = req.body
			new db.book(req.body).save((err, data) => {
				if (err) {
					return res.status(500).send('服务器忙,请稍后重试')
				}
				res.status(200).send('数据添加成功')
			})
			break
		case 'PUT':
			if (id) {
				await db.book.findByIdAndUpdate(id, req.body, (err, data) => {
					if (err) {
						return res.status(500).send('服务器忙,请稍后重试')
					}
					res.send('ok')
				})
			}
			break
		case 'DELETE':
			await db.book.remove({_id: id}, (err, data) => {
				if (err) {
					return res.status(500).send('服务器忙,请稍后重试')
				}
				res.send('删除成功')
			})
			break
	}
	return
 })

module.exports = router