let state = {
  rgb: {
    red: 255,
    blue: 255,
    green: 255,
  },
  cmyk: {
    cyan: 100,
    magenta: 100,
    yellow: 100,
    key: 100,
  },
}
const rgb = ['red', 'green', 'blue']
const cmyk = ['cyan', 'magenta', 'yellow', 'key']

rgb.map((el, i) => {
  updateColor(state.rgb[el], el, 'rgb')

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

function updateColor(value, color, colorspace) {
  let rgbArray = [];
  if (colorspace === 'cmyk') {
    let cmykArray = [0, 0, 0, 0]
    const i = cmyk.indexOf(color)
    state.cmyk[color] = value
    cmykArray[i] = value
    rgbArray = cmykToRgb(...cmykArray)
  }
  else if (colorspace === 'rgb') {
    rgbArray = [0, 0, 0]
    const i = rgb.indexOf(color)
    state.rgb[color] = value
    rgbArray[i] = value
  }

  const element = document.querySelector('#' + color)
  element.style.fill = `rgb(${rgbArray.join(',')})`
  console.log(colorspace)
  document.querySelector(`.result--${colorspace}`)
    .innerHTML = '#' + getHex(state.rgb.red, state.rgb.green, state.rgb.blue)
}

function cmykToRgb(c, m, y, k) {
  c = c / 255
  m = m / 255
  y = y / 255
  k = k / 255

  let r = 1 - Math.min( 1, c * ( 1 - k ) + k )
  let g = 1 - Math.min( 1, m * ( 1 - k ) + k )
  let b = 1 - Math.min( 1, y * ( 1 - k ) + k )

  r = Math.round( r * 255 )
  g = Math.round( g * 255 )
  b = Math.round( b * 255 )

  return [r, g, b]
}

// bind inputs
const ranges = document.querySelectorAll('.colorspace__range')
;[...ranges].map(el => {
  el.addEventListener('input', (e) => {
    const value = e.target.value
    const color = e.target.getAttribute('data-key')
    const colorspace = e.target.closest('.colorspace').getAttribute('data-colorspace')
    updateColor(value, color, colorspace)
  })
})
