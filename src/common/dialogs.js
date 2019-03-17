var dialogs = {
  alert (msg) {
    document.getElementById('errorTips').innerHTML = `<span>${msg}</span>`
    setTimeout(() => {
      document.getElementById('errorTips').innerHTML = ''
    }, 3000)
  }
}
export default dialogs
