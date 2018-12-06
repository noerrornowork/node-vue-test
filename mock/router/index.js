const express = require('express')
const url = require('url')
const mongoose = require('mongoose')
const db = require('../model/db.js')

const router = express.Router()

let pageSize = 5

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
	// let id = mongoose.Types.ObjectId(query.id)
	console.log(id)
	console.log(typeof id)
	
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
				id = mongoose.Types.ObjectId(query.id)
				await db.book.findByIdAndUpdate(id, req.body, (err, data) => {
					if (err) {
						return res.status(500).send('服务器忙,请稍后重试')
					}
					res.send('ok')
				})
			break
		case 'DELETE':
		  id = mongoose.Types.ObjectId(query.id)
			await db.book.deleteById(id, (err, data) => {
				if (err) {
					return res.status(500).send('服务器忙,请稍后重试')
				}
				res.send('删除成功')
			})
			break
	}
	return
 })

router.get('/page', async (req, res, next) => {

	let {pathname, query} = url.parse(req.url, true)

	let offset = parseInt(query.offset) || 0

	await db.book.find((err, data) => {
		if (err) {
			return res.status(500).send('服务器忙,请稍后重试')
		}
		let hasMore = true
		if (data.length <= offset + pageSize) {
			hasMore = false
		}
		let results = data.reverse().slice(offset, offset + pageSize)
		res.send({hasMore, books: results})
	})
})

module.exports = router