

// cursor 1st page Animation
const cursorAnimation = ()=>{

    let a = document.querySelector("#circle");
    let b = document.querySelector("#main");
    
    b.addEventListener("mousemove",(dets)=>{
       gsap.to(a,{
        x:dets.x,
        y:dets.y,
        duration:0.4,
       })
    })
    
    b.addEventListener("mouseenter",()=>{
       
        gsap.to(a,{
            scale:1,
                  opacity:1
        })
    })
    b.addEventListener("mouseleave",()=>{
        gsap.to(a,{
       
            scale:0,
            
            opacity:0,
            
    
        })
    })
}
cursorAnimation()

// end

// swipper    
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // swipper end



    function togle(){
      let temp = document.getElementById("password1");
      if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
    }