let props = {
  red: 100,
  blue: 155,
  green: 20,
}

;['red', 'green', 'blue'].map((el, i) => {
  updateColor(props[el], el)
})

function getHex(r,g,b) {
  const hex = [r,g,b]
    .map(el => {
      const x = parseInt(el).toString(16)
      return (x.length === 1) ? `0${x}` : x
    })
    .join('')
  return hex
}


function updateColor(value, color) {
  const rgbArray = [0, 0, 0]
  const i = ['red', 'green', 'blue'].indexOf(color)
  rgbArray[i] = value
  props[color] = value

  const element = document.querySelector('#' + color)
  element.style.fill = `rgb(${rgbArray.join(',')})`

  document.querySelector('#result')
    .innerHTML = '#' + getHex(props.red, props.green, props.blue)
}

// bind events
const ranges = document.querySelectorAll('.rgb__range')
;[...ranges].map(el => {
  el.addEventListener('input', (e) => {
    updateColor(e.target.value, e.target.getAttribute('data-key'))
  })
})
