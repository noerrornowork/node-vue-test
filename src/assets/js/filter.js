// 价格过滤器
let priceFilter = value => {
  return parseFloat(value).toFixed(2) + ' $'
}
export { priceFilter }
