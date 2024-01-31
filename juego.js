const options = document.querySelectorAll(".options"); 
const result = document.querySelector(".result"); 
const pButton = document.querySelector(".pButton"); 
const cButton = document.querySelector(".cButton"); 
const resetButton = document.getElementById("reset"); 

// Declarar variables globales para los puntos
let pScore = 0; // Puntos del jugador
let cScore = 0; // Puntos de la computadora

// Añadir un evento de click a cada botón de opción
options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent; // 👊, 🖐️ o ✌️
    // Obtener la opción de la computadora
    const cOptions = ["👊", "🖐️", "✌️"]; 
    const cInput = cOptions[Math.floor(Math.random() * 3)]; // Elección aleatoria
    // Comparar las opciones y determinar el ganador
    let outcome; 
    if (pInput === cInput) {
      outcome = "Genial es un Empate!";
      result.classList.value = '';
      result.classList.add("result");
      result.classList.add("draw"); // Añadir clase de empate
    } else if (
      (pInput === "👊" && cInput === "✌️") ||
      (pInput === "🖐️" && cInput === "👊") ||
      (pInput === "✌️" && cInput === "🖐️")
    ) {
      outcome = "Muy Bien Ganaste!";
      result.classList.value = '';
      result.classList.add("result");
      result.classList.add("win"); // Añadir clase de victoria
      pScore++; // Incrementar los puntos del jugador
    } else {
      outcome = "Lo siento Perdiste!";
      result.classList.value = '';
      result.classList.add("result");
      result.classList.add("lose"); // Añadir clase de derrota
      cScore++; // Incrementar los puntos de la computadora
    }
    // Mostrar el resultado y los puntos en el div de resultado
    result.textContent = `Tú: ${pInput}\nPC: ${cInput}\n${outcome}`;
    pButton.textContent = `Tú: ${pScore} puntos`;
    cButton.textContent = `PC: ${cScore} puntos`;
  });
});

// Añadir un evento de click al botón de resetear
resetButton.addEventListener("click", function() {
  pScore = 0;
  cScore = 0;
  // Borrar el contenido del div de resultado y de los botones de puntos
  result.textContent = "";
  pButton.textContent = "";
  cButton.textContent = "";
  result.classList.remove("win", "lose", "draw");
});