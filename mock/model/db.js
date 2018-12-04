const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

let sliderSchema = new Schema({
	url: String
})

let hotSchema = new Schema({
	bookCover: String,
	bookName: {
		type: String,
		required: true
	},
	bookInfo: String,
	bookPrice: Number
})

let bookSchema = new Schema({
	bookCover: String,
	bookName: {
		type: String,
		required: true
	},
	bookInfo: String,
	bookPrice: Number
})

module.exports = {
	slider: mongoose.model('Slider', sliderSchema),
	hot: mongoose.model('Hot', hotSchema),
	book: mongoose.model('Book', bookSchema)
}