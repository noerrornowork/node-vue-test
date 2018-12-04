import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3030'

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
/**
 * 修改一本图书
 * @param {*} id 图书编号
 * @param {*} data
 * @returns {AxiosPromise<T>}
 */
export let updateBook = (id, data) => {
  return axios.put(`/book?id=${id}`, data)
}
export let addBook = (data) => {
  return axios.post('/book', data)
}
// 并发请求
export let getAll = () => {
  return axios.all([getSliders(), getHotBooks()])
}
// 根据偏移量, 返回对应的数据 5
export let pagination = (offset) => {
  return axios.get(`/page?offset=${offset}`)
}
