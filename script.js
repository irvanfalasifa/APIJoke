const buttons = document.querySelectorAll('.btn')
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
      const x = e.pageX
      const y = e.pageY

      const buttonTop = e.target.offsetTop
      const buttonLeft = e.target.offsetLeft

      const xInside = x - buttonLeft
      const yInside = y - buttonTop

      const circle = document.createElement('span')
      circle.classList.add('circle')
      circle.style.top = yInside + 'px'
      circle.style.left = xInside + 'px'

      this.appendChild(circle)

      setTimeout(() => circle.remove(), 500)
  })
})

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
