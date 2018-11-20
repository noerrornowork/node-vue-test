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
