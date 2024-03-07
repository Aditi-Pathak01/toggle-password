let input = document.querySelector("#input")
let eyeIcon = document.querySelector("#eye-icon")

eyeIcon.addEventListener("click",()=>{
  if (input.type === "password"){
    input.type = "text"
    eyeIcon.src = "assets/eye-open2.png"
  } else {
    input.type = "password"
    eyeIcon.src = "assets/eye-close.png"
  }
})