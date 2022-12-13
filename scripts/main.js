const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Kevyn.jfif") {
    myImage.setAttribute("src", "images/KevynIA.jfif");
  } else {
    myImage.setAttribute("src", "images/Kevyn.jfif");
  }
};

let padding = document.querySelector("nav").offsetHeight + "px";
document.body.style.paddingTop=padding;


$(function(){
  $("body").on("click", function(e){
    if(e.target.getAttribute("class")=="navbar"||$(e.target).parents(".navbar").length>0){

    }
    else
    {
    if($(".navbar-collapse").hasClass("show")==true)
     {
       $(".navbar-toggler")[0].click();
     }
    } 
  });
})

const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hiddenbutton")
  } else {
    backToTopButton.classList.add("hiddenbutton")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

backToTopButton.addEventListener("click", goToTop)
  
  