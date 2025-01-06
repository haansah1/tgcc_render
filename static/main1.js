var hidEl = document.querySelector(".hid")
  var barsEl = document.querySelector(".divbars")
  var inputEl = document.getElementById("input")
  var closeEl = document.querySelector(".close")
  var windowEl = document.getElementBy

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


  welcomeEl = document.querySelectorAll('.welc-p')
  headerEl = document.querySelector('[class^=header]')
  
  console.log(welcomeEl1.offsetTop)
  console.log(headerEl.offsetHeight)
  
  let animate = false;
  window.addEventListener("scroll", ()=> {
      console.log("l,fldkl")
      if(window.scrollY > headerEl.offsetTop - welcomeEl[1].offsetHeight+600 && !animate){
          gsap.from(welcomeEl, {
            opacity: 1,
            y: 200,
            duration: 1,
            stagger: 0.2,
            yoyo: true,
            ease: 'power3.out',
            delay: .5,
          })
        // }
        animate = true
        console.log("k");
        }
        else if (window.scrollY < headerEl.offsetTop - welcomeEl[1].offsetHeight+600 && animate){
          console.log("sldk");
            gsap.from(welcomeEl, {
              opacity:0 ,
              y: 0,
              stagger: 0.2,
              yoyo: true,
              // ease: 'power3.out',
            })
          // }
          animate = false;
        }
    }
    
)
  



