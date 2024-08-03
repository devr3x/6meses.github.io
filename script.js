let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let formRef = document.querySelector("form");

let normalEyeStyle = () => {
  eyeL.style.cssText = "left: 0.6em; top: 0.6em;";
  eyeR.style.cssText = "right: 0.6em; top: 0.6em;";
};

let normalHandStyle = () => {
  handL.style.cssText =
    "height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);";
  handR.style.cssText =
    "height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);";
};


// When clicked on password input
passwordRef.addEventListener("focus", () => {
  handL.style.cssText =
    "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-155deg);";
  handR.style.cssText =
    "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(155deg);";
  normalEyeStyle();
});

// When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});
// Añade esta función para verificar la contraseña
function verificarContrasena(contrasena) {
  // Aquí puedes definir tu lógica de verificación
  return contrasena === "09/03/2024";
}

// Añade este event listener al final del archivo
formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  let contrasena = passwordRef.value;
  
  if (verificarContrasena(contrasena)) {
    // Si la contraseña es correcta, redirige a la página deseada
    window.location.href = "bien/index.html";
  } else {
    // Opcional: muestra un mensaje de error
    alert("Contraseña incorrecta");
  }
});
  
