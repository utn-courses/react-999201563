// ¿Qué necesitamos?
const button = document.querySelector("button")

// ¿Qué tiene que hacer?
// callback -> una función que se ejecuta cuando pasa algo
button.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor

  const newColor = currentColor ===
    "white" ? "black" : "white"

  document.body.style.backgroundColor = newColor
})