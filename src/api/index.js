import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.response.use((res) => {
  return res.data
})

// 获取轮播图数据
export let getSliders = () => {
  return axios.get('/sliders')
}
// 获取热门图书数据
export let getHotBooks = () => {
  return axios.get('/hot')
}
// 获取所有图书
export let getAllBooks = () => {
  return axios.get('/book')
}
// 删除图书
export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`)
}
// 根据id获取每一本图书信息
export let getBookById = (id) => {
  return axios.get(`/book?id=${id}`)
}
// 新增一本图书
export let addBook = (book) => {
  return axios.put(`/book?book=${book}`)
}
