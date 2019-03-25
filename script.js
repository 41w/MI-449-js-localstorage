var changeTheme = function () {
  var theme = window.localStorage.getItem('theme')
  if (theme === null) {
    theme = 'night'
  }
  if (theme === 'day') {
    document.body.setAttribute('class', theme)
    window.localStorage.setItem('theme', 'night')
  } else {
    document.body.setAttribute('class', theme)
    window.localStorage.setItem('theme', 'day')
  }
}

var theme = window.localStorage.getItem('theme')
if (theme === 'day') {
  document.body.setAttribute('class', 'night')
} else {
  document.body.setAttribute('class', 'day')
}

var button = document.getElementById('change')
button.addEventListener('click', changeTheme)

var counter = window.localStorage.getItem('counter')
if (counter === null) {
  counter = 1
} else {
  counter = parseInt(counter) + 1
}
window.localStorage.setItem('counter', counter)
document.getElementById('text').textContent = 'Times you visited the website: ' + counter
