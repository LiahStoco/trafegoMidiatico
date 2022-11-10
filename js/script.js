const imageWrapper = document.querySelector('#card')

function drawNewCard () {
  imageWrapper.childNodes.forEach(child => child.remove())
  imageWrapper.append(getRandomCardImage());
}

function getRandomCardImage () {
  const img = document.createElement('img');
  const random = randomIntegerBetween(1, 27)
  img.src = `img/${random}.png`
  return img
}

function randomIntegerBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

drawNewCard();