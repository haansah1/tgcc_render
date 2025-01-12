var hidEl = document.querySelector(".hid")
  var barsEl = document.querySelector(".divbars")
  var inputEl = document.getElementById("input")
  var closeEl = document.querySelector(".close")
  // var windowEl = document.getElementBy
  var welcomeEl = document.querySelector(".welcome-wrapper")

  inputEl.addEventListener("input", ()=>{
    if(inputEl.checked){
      console.log("why");
      hidEl.style.transform = "scaleY(1)";
    }
    else{
      hidEl.style.transform = "scaleY(1)";
      console.log("why");
    }
  })

  closeEl.addEventListener("click", ()=>{
    console.log("ei");
    hidEl.classList.add("active1");
    hidEl.style.transform = "scaleY(0)";
  })

  window.addEventListener("click", ()=>{
    hidEl.style.transform = "scaleY(0)";
  })

  const sensitivity = 25;

  welcomeEl.addEventListener("mousemove", (e)=>{

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    const moveX = (mouseX - 0.5) * sensitivity;
    const moveY = (mouseY - 0.5) * sensitivity;

    welcomeEl.style.backgroundPosition = `${50 - moveX}% ${50 - moveY}%`;
  });

  



