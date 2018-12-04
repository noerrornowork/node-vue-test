let focus = {
  inserted: (el) => {
    el.focus()
  }
}

let color = {
  inserted: (el) => {
    el.style.color = 'red'
  }
}
export { focus, color }
