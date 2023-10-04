var offerBar=document.querySelector(".offerbar")
var hidee=document.getElementById("offer-hide")

hidee.addEventListener("click",function(){
   offerBar.style.display="none"
})

var sidemenu=document.querySelector(".navbar-menu-toggle")
sidemenu.addEventListener("click",function(){
    hidden.style.marginLeft="0px"
})

var hidden=document.querySelector(".side-navbar")
var sideclose=document.getElementById("sideclose")
sideclose.addEventListener("click",function(){
    hidden.style.marginLeft="-60%"
})

leftbtn=document.getElementById("slider-left-activate")
rightBtn=document.getElementById("slider-right-activate")
container=document.querySelector(".slider-image-container")
marginleft=0

rightBtn.addEventListener("click",function(){
    marginleft=marginleft+100
    if(marginleft<=200){
     container.style.marginLeft="-"+marginleft+"vw"
    }
    else{
        marginleft=0
        container.style.marginLeft="-"+marginleft+"vw"
    }
})
 leftbtn.addEventListener("click",function(){
   if(marginleft==0){
    marginleft=200
    container.style.marginLeft="-"+marginleft+"vw"
   }
   else{
    marginleft=marginleft-100
    container.style.marginLeft="-"+marginleft+"vw"
   }
 })

 var brandsleftbtn=document.getElementById("brands-left-activate")
 var brandsrightbtn=document.getElementById("brands-right-activate")
 var brandcont=document.querySelector(".brands-container")

 brandsleftbtn.addEventListener("click",function(){
    brandcont.scrollBy({
       
        left:-100,
        behavior:"smooth"
    })
 })
 brandsrightbtn.addEventListener("click",function(){
    brandcont.scrollBy({
      
        left:100,
        behavior:"smooth"
    })
 })


 var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})
