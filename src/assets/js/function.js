/**
 * 删除数组中的元素
 * @param  {[type]} el [description]
 * @return {[type]}    [description]
 */
Array.prototype.del = function(el) {
	if (el === '' || el === undefined) {
		throw new Error('参数传入不正确')
    }
	let index = this.indexOf(el)
	this.splice(index, 1)
	
	return this
}