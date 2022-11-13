const imageWrapper = document.querySelector('#card-wrapper')
const refreshButton = document.querySelector('#refresh-button')

function drawNewCard () {
  refreshButton.classList.add('hidden')
  imageWrapper.childNodes.forEach(child => child.remove())
  imageWrapper.append(getRandomCardImage());
}

function getRandomCardImage () {
  const img = document.createElement('img');
  const random = randomIntegerBetween(1, 27)
  img.src = `img/${random}.png`
  img.onload = () => {
    refreshButton.classList.remove('hidden')
  }
  return img
}

function randomIntegerBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

drawNewCard();