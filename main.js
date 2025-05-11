// Efecto de corazones flotando
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";
  heart.innerText = "💖";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}, 500);

// Mensaje sorpresa en el footer
const footer = document.getElementById("footer");
footer.addEventListener("mouseover", () => {
  footer.innerText = "Gracias por todo, mamá. Sos mi héroe.";
});

footer.addEventListener("mouseout", () => {
  footer.innerText = "Con todo mi amor, tu hija ♥";
});
